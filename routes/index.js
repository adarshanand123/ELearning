var express = require('express');
var router = express.Router();
require('marko/node-require');
var login  = require('./login');
var template = require('../views/index.marko');
var classModel = require('../models/class.js');
/* GET home page. */
router.get('/', async function(req, res, next) {
	var pageData = {};
	pageData.classes = await addClass(pageData);
	pageData.filename = "./pages/home.marko";
	console.log("reaching here");
    res.marko(template,{pageData: pageData});
});

function addClass(pageData) {
	var classPromise = new Promise(function(resolve,reject) {
		classModel.find({},function(err,data){
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

router.use('/login', login);

module.exports = router;
