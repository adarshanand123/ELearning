var express = require('express');
var router = express.Router();
var userModel = require("../models/user.js");
var StudentModel = require("../models/student.js");
var InstructorModel = require("../models/instructor.js");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.post('/',passport.authenticate('local',{ failureRedirect: '/classes',
	failureFlash: 'invalid username or password', successFlash: 'You are logged in' }),function(req ,res ,next){
		res.redirect('/');
		console.log("success");
});

// router.get('/', ensureAuthenticated, function(req, res, next) {
//  	template.render({filename:"./pages/members.marko",title: "members", user: req.user},res);
// });

// function ensureAuthenticated(req, res ,next) {
// 	if(req.isAuthenticated()) {   // req.isAuthenticated() is function provided by passport
// 		return next();
// 	} else {
// 		res.redirect("/users/login");
// 	}
// }

router.get('/logout',function(req,res){
	req.logout();
	res.redirect('/');
});

passport.use(new LocalStrategy(function(usern,password,done){
	userModel.findOne({ 'username': usern },function(err,user) {
		if(err) {
			console.log("error in finduser");
			throw err;
		} 
		else if(!user) {
			console.log("invalid username");
			done(null,false);
		} else {
			if(password != user.password) {
					console.log("wrong password");
					done(null,false);
				} else {
					console.log("successful login");
					done(null,user);
				}
			}
		}
	);
}));

passport.serializeUser(function(user, done) {
	console.log("in serializeUser");
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	console.log("in deserializeUser");
	// userModel.findById(id, function(err, user) {
	// 	console.log("checking deserializeUser",user);
	    
	// });
	getUser(id).then(function(user){done(null, user);}).catch(function(err){done(err, null);});
});

function getUser(userId){
	return getUserTypeAndName(userId).then(function(userData){return getUserByUsername(userData)});
}

function getUserTypeAndName(userId) {
	var userTypeAndNamePromise = new Promise(function(resolve,reject) {
		userModel.findById(userId,function(err,data){
			if(err) {
				reject(err);
			} else{
				data = { username: data.username, usertype: data.usertype };
				resolve(data);
			}
		});		
	});
	return userTypeAndNamePromise;
}

function getUserByUsername(userData) {
	var userTypeModel;
	if(userData.usertype == "Student") {
		userTypeModel = StudentModel;
	} else { 
		userTypeModel = InstructorModel;
	}
	var userPromise = new Promise(function(resolve,reject) {
		userTypeModel.find({},function(err,data){
			if(err) {
				reject(err);
			} else{
				data = data[0];
				data.usertype = userData.usertype;
				resolve(data);
			}
		});		
	});
	return userPromise;
}

module.exports = router;