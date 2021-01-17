const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const students = require("./api/students");
const teacher = require("./api/teachers");
const courses = require("./api/courses");

const app = express();


const PORT = 8001;

app.all("/*", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	res.header(
		"Access-Control-Allow-Headers",
		"Content-type,Accept,X-Access-Token,X-Key",
	);
	if (req.method === "OPTIONS") {
		res.status(200).end();
	} else {
		next();
	}
});
app.use(bodyParser());
app.use(cors());
app.use("/api/students", students);
app.use("/api/teachers", teacher);
app.use("/api/courses", courses);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
