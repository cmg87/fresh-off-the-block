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
  console.log(req.body);
  let newUser = new User({
    username: username,
    password: password
  });
  User.createUser(newUser, function (err, user) {
    if (err) throw err;
    console.log(user);
  });
		//checking for email and username are already taken
	// 	User.findOne({ username: { 
	// 		"$regex": "^" + username + "\\b", "$options": "i"
	// }}, function (err, mail) {
	// 			if (user) {
	// 				res.render('register', {
	// 					user: user,
	// 					mail: mail
	// 				});
	// 			}
	// 			else {
	// 				const newUser = new User({
	// 					username: username,
	// 					password: password
	// 				});
	// 				User.createUser(newUser, function (err, user) {
	// 					if (err) throw err;
	// 					console.log(user);
	// 				});
  //        	req.flash('success_msg', 'You are registered and can now login');
	// 				// res.redirect('/users/login');
	// 			}
	// 		});
});

passport.use(new LocalStrategy(
	function (username, password, done) {
		User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}

			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
	function (req, res) {
		res.redirect('/');
	});

router.get('/logout', function (req, res) {
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});

module.exports = router;