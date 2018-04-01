var express = require('express');
var router = express.Router();
var login  = require('./login');
require('marko/node-require');
var classModel = require('../models/class.js');
var StudentModel = require("../models/student.js");
var InstructorModel = require("../models/instructor.js");
var template = require('../views/index.marko');


/* GET all classes. ------start */
router.get('/',  async  function(req, res, next) {
  	var pageData = {};
  	pageData.classes = await addClasses();
	pageData.filename = "./pages/classes.marko"
    res.marko(template, { pageData: pageData });
});


function addClasses() {
	var classesPromise = new Promise(function(resolve,reject) {
		classModel.find({},function(err,data){
			if(err) {
				console.log("error in getting classes");
				throw err;
			} else {
				resolve(data);
			}
		});
	});
	return classesPromise;
}

/* GET all classes. ------end-------- */


//get single class detail  -------start-----
router.get('/:id',  async  function(req, res, next) {
  	var pageData = {};
  	if(req.user) {
  		checkWhetherUserRegistered(req.params.id,req.user.classes,res.locals);
  	}
  	pageData.classDetails = await addClass(req.params.id);
	pageData.filename = "./pages/classDetails.marko"
    res.marko(template, { pageData: pageData });
});

function checkWhetherUserRegistered(classId,classes,locals){
	console.log(classId);
	for(var i=0;i<classes.length;i++) {
		console.log(classes[i].class_id);
		if(classId == classes[i].class_id) {
			locals.class = true;
		}
	}
}

function addClass(id) {
	console.log("here coming for no reason");
	var classPromise = new Promise(function(resolve,reject) {
		classModel.findById({_id:id},function(err,data){
			if(err) {
				console.log("error in getting classes");
				throw err;
			} else {
				resolve(data);
			}
		});
	});
	return classPromise;
}

//get single class detail  ------end---
 
//getting add lessons page ---------   start --------

	router.get('/:id/add',  async  function(req, res, next) {
	  	var pageData = {};
		pageData.filename = "./pages/addlesson.marko";
		pageData.class_id = req.params.id;
	    res.marko(template, { pageData: pageData });
	});


//getting add class page ------ end ----------

//adding new lesson  --- start ----
	
	router.post('/:id/add',  async  function(req, res, next) {
		var class_id = req.params.id;
		var lessonData = getLessonData(req.body);
		var a = await addlessonData(class_id,lessonData);
		res.redirect('/userMyClasses/');
	});

function addlessonData(class_id,lessonData) {
	var p = new Promise(function(resolve,reject){
		classModel.update({_id:class_id},{$push: {lessons : lessonData}},function(err,data){
			resolve(1);
		});
	});
	return p;
}

function getLessonData(bodyData) {
	var lessonData = {};
	lessonData.lesson_number = bodyData.lesson_number;
	lessonData.lesson_title = bodyData.lesson_title;
	lessonData.lesson_body = bodyData.lesson_body;
	return lessonData;
}
// adding new lesson --- end ----

//register user for given class --- start--
router.post('/register',  async function(req, res, next) {
	console.log("/register coming");
	var a = await saveClassInUser(req.body.class_id,req.body.class_title,req.user);
 	var redirectUrl = `/classes/${req.body.class_id}`;
 	res.redirect(redirectUrl);
});

function saveClassInUser(classId,classTitle,userData){
	console.log("/register save class coming");
	var userTypeModel;
	if(userData.usertype == "Student") {
		userTypeModel = StudentModel;
		console.log("student");
	} else { 
		userTypeModel = InstructorModel;
		console.log("instructor");
	}

	var promise = new Promise(function(resolve,reject) {
		userTypeModel.update({username: userData.username},{$push: {classes: {class_id:classId,class_title:classTitle}}},function(err,data){
			console.log("/register promise coming ");
			resolve(1);
		});		
	});
	console.log("/register return coming");
	return promise;
	
}

//register user for given class --- end--



router.use('/login', login);

module.exports = router;
