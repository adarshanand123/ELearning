var mongoose = require('mongoose');
// var ObjectId = mongoose.Types.ObjectId;
var studentSchema = mongoose.Schema({
	first_name: String,
	last_name: String,
	street_address: String,
	city: String,
	state: String,
	zip: String,
	username: String,
	email: String,
	classes: [{
		class_id: String,
		class_title: String
	}]
});

var studentModel = mongoose.model("students",studentSchema);

module.exports = studentModel;

