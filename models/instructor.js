var mongoose = require('mongoose');
// var ObjectId = mongoose.Types.ObjectId;
var instructorSchema = mongoose.Schema({
	first_name: String,
	last_name: String,
	street_address: String,
	city: String,
	state: String,
	zip: String,
	username: String,
	email: String,
	classes: [{
		class_id: mongoose.Schema.Types.ObjectId,
		class_title: String
	}]
});

var instructorModel = mongoose.model("instructors",instructorSchema);

module.exports = instructorModel;