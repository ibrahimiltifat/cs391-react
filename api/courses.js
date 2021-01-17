const express = require("express");
const Datastore = require("nedb");

const app = express.Router();

module.exports = app;

let coursesDB = new Datastore({
	filename: "./db/courses.db",
	autoload: true,
});

coursesDB.ensureIndex({ fieldName: "_id", unique: true });

app.get("/all", function (req, res) {
	coursesDB.find({}, function (err, docs) {
		if (err) return res.send(err);
		res.send(docs);
	});
});

app.post("/add", function (req, res) {
	coursesDB.insert(req.body, function (err, course) {
		if (err) return res.status(404).json(err);
		return res.status(202).json(course);
	});
});

app.put("/enroll", function (req, res) {
    coursesDB.update( {
        _id: req.body._id
    }, req.body, {}, function (
        err,
        numReplaced,
        course
    ) {
		console.log(req.body)
        if ( err ) {
			console.log(err)
			return res.status( 500 ).send( err )}
        else{
			console.log("done")
			return res.status(200).json(course)};
    } );
});

app.put("/drop", function (req, res) {
    coursesDB.update( {
        _id: req.body._id
    }, req.body, {}, function (
        err,
        numReplaced,
        course
    ) {
		console.log(req.body)
        if ( err ) {
			console.log(err)
			return res.status( 500 ).send( err )}
        else{
			console.log("done")
			return res.status(200).json(course)};
    } );
});