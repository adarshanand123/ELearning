var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ELearning');
var classSchema = mongoose.Schema({
	title: String,
	description: String,
	instructor: String,
	lessons: [{
		lesson_number: Number,
		lesson_title: String,
		lesson_body: String
	}]
});

var mongooseModel = mongoose.model('classes',classSchema);

module.exports = mongooseModel;


























// var lesson1,lesson2;
// var class1 = new mongooseModel();
// class1.title = "Introduction to Javascript";
// class1.description = "For a newbie to web Development,it is best place to start with.";
// class1.instructor = "Ashish Kumar";
// lesson1 = {lesson_number: 1,lesson_title: "variables and constants", lesson_body:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."};
// lesson2 = {lesson_number: 2,lesson_title: "prototype", lesson_body:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."};
// class1.lessons = [lesson1,lesson2];
// class1.save();

// var class2 = new mongooseModel();
// class2.title = "English Grammar";
// class2.description = "It is good to have command over Basic Grammar to be good at this language";
// class2.instructor = "Abhishek Seth";
// lesson1 = {lesson_number: 1,lesson_title: "Sentence Parts", lesson_body:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."};
// lesson2 = {lesson_number: 2,lesson_title: "Parts of Speech", lesson_body:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."};
// class2.lessons = [lesson1,lesson2];
// class2.save();

// var class3 = new mongooseModel();
// class3.title = "Karate Coaching";
// class3.description = "It is a good guide to those who want to learn basics of karate";
// class3.instructor = "Raunak Seth";
// lesson1 = {lesson_number: 1,lesson_title: "Karate Counting", lesson_body:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."};
// lesson2 = {lesson_number: 2,lesson_title: "Karate kata", lesson_body:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."};
// class3.lessons = [lesson1,lesson2];
// class3.save();

