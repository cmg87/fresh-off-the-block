const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');


// Register User
router.post('/register', function (req, res) {
	let username = req.body.username;
	let password = req.body.password;
	

  let newUser = new User({
    username: username,
	password: password,
	conversations: ["default"]
  });
  
User.findOne({username: username},function(err, user){
	if(user){
		res.send("User Taken")
	}
	else{
		User.createUser(newUser, function (err, user) {
			if (err) {
				console.log(err);
				return false;	
			}
		});
		res.send("success")
	}
});
  

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
		console.log(req);
		res.json({
			username: req.user.username,
			conversations: req.user.conversations 
		});
	}
);

router.post('/addConversation', (req,res)=>{
	console.log(req.body);
	User.addConversation(req.body.username, req.body.conversation).then((user) => {
		console.log(user);
		if(user) {
			res.json({
				conversations: user.conversations
			});
		}
		else {
			res.sendStatus(444);
		}
	});
	
})

// router.get('/logout', function (req, res) {
// 	req.logout();

// 	req.flash('success_msg', 'You are logged out');

// 	res.redirect('/users/login');
// });

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;