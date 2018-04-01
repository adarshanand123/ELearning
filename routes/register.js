var express = require('express');
var router = express.Router();
require('marko/node-require');

var instructorModel = require("../models/instructor.js");
var studentModel = require("../models/student.js");
var userModel = require("../models/user.js");

var template = require('../views/index.marko');
/* GET home page. */
router.get('/', function(req, res, next) {
	var pageData = {};
	pageData.filename = "./pages/register.marko";
    res.marko(template,{pageData: pageData});
});

router.post('/', function(req, res, next) {
	saveLoginData(req.body);
	if(req.body.usertype == "Student") {
		saveUserData(studentModel,req.body);
	} else {
		saveUserData(instructorModel,req.body);
	}
	res.redirect("/");
});

function saveLoginData(data){
	console.log(userModel);
	var loginData = new userModel();
	loginData.username = data.username;
	loginData.email = data.email;
	loginData.password = data.password;
	loginData.usertype = data.usertype;
	console.log(loginData);
	loginData.save();
}

function saveUserData(modelName,data) {
	console.log(modelName);
	var userData = new modelName();
	userData.first_name = data.first_name;
	userData.last_name = data.last_name;
	userData.street_address = data.street_address;
	userData.city = data.city;
	userData.state = data.state;
	userData.zip = data.zip;
	userData.username = data.username;
	userData.email = data.email;
	console.log(userData);
	userData.save();
}



module.exports = router;
