var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	}
});

var User = module.exports = mongoose.model('blockchainusers', UserSchema);

module.exports.createUser = function(newUser, callback){
	console.log("[e8dfdc8e-b67d-41f1-b532-bb67a8f3f406] Inside of create user");
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	console.log("[8d7c11a7-3b6e-4eea-8d68-fbdcb1c85777] Inside get user by username: ", username);
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	console.log("[4a04140c-4ce7-4bd5-91cd-b565e7d53bf9] Inside get user by id");
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	console.log("[06796df3-6dc9-48bc-9450-b503697a619d] Inside compare password");
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}