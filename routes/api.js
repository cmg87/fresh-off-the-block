const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');


// Register User
router.post('/register', function (req, res) {
	let username = req.body.username;
	let password = req.body.password;
	let password2 = req.body.password2;

  console.log("[4855048c-43a4-4410-a45b-25aa281d101d] In register user: ", req.body);

  let newUser = new User({
    username: username,
    password: password
  });

  User.createUser(newUser, function (err, user) {
    if (err) {
		console.log(err);
		return false;	
	}

    console.log("[5096c823-e7a1-4356-9c6d-5c73e6c31da8] succesfully created USER: ",user);
  });
		/*checking for email and username are already taken
		User.findOne({ username: { 
			"$regex": "^" + username + "\\b", "$options": "i"
	}}, function (err, mail) {
				if (user) {
					res.render('register', {
						user: user,
						mail: mail
					});
				}
				else {
					const newUser = new User({
						username: username,
						password: password
					});
					User.createUser(newUser, function (err, user) {
						if (err) throw err;
						console.log(user);
					});
         	req.flash('success_msg', 'You are registered and can now login');
					// res.redirect('/users/login');
				}
			});*/
});

passport.use(new LocalStrategy(
	{
		passReqToCallback : true
	},
	function (req, username, password, done) {
		console.log(`[d9d8131b-1674-40a8-ade1-e02a16e37767] in passport with username: ${username} and password: ${password}`)
		User.getUserByUsername(username, function (err, user) {
			if (err) {
				console.log("ERROR: ", err);
				return false;	
			}
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}

			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) {
					console.log("ERROR: ", err);
					return false;	
				}
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}	)
);

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local'),
	function (req, res) {
		res.json({username: req.user.username});
	}
);

router.get('/logout', function (req, res) {
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});

module.exports = router;