var express = require('express');
var router = express.Router();
require('marko/node-require');

var template = require('../views/index.marko');
var userModel = require('../models/user.js');
var studentModel = require('../models/student.js');
var instructorModel = require('../models/instructor.js');
/* GET home page. */
router.get('/', async function(req, res, next) {
	var pageData = {};
	pageData.userClasses = req.user.classes;
	pageData.filename = "./pages/myClasses.marko";
    res.marko(template,{pageData: pageData});
});

// function getClassesOfUser(userId){
// 	return getUserType(userId).then(getClassesOfUsername);
// }

// function getUserType(userId) {
// 	var userTypePromise = new Promise(resolve,reject) {
// 		userModel.findById(userId,function(err,data){
// 			if(err) {
// 				throw err;
// 			} else{
// 				data = data.username;
// 				resolve(data);
// 			}
// 		});		
// 	}
// 	return userTypePromise;
// }

// function getClassesOfUsername(username) {
// 	var userClassesPromise = new Promise(resolve,reject) {
// 		userModel.find({username: username},function(err,data){
// 			if(err) {
// 				throw err;
// 			} else{
// 				data = data.classes;
// 				resolve(data);
// 			}
// 		});		
// 	}
// 	return userClassesPromise;
// }


module.exports = router;