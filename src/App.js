import React, { useEffect } from "react";
import LoginTeacher from "./LoginTeacher.js";
import LoginStudent from "./LoginStudent.js";
import Course from "./Course.js";
import EnrollCourse from "./EnrollCourse.js";
import PrivateRoute from "./routes/PrivateRoute";
import CreateCourse from "./pages/teacher/createCourses";
import MyCourses from "./pages/teacher/myCourses";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	useEffect(() => {
		fetch("http://localhost:8001/api/students/signUP", { method: "GET" })
			.then((response) => response.json())
			.then((data) => console.log(data));

		fetch("http://localhost:8001/api/teachers/signUP", { method: "GET" })
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, []);

	return (
		<Router>
			<Switch>
      <Route exact path="/">
					<LoginStudent />
				</Route>
				<Route exact path="/teacher">
					<LoginTeacher />
				</Route>
				<Route exact path="/loginstudent">
					<LoginStudent />
				</Route>
				
				<PrivateRoute path="/addcourses" component={CreateCourse} />
				<PrivateRoute path="/mycourses" component={MyCourses} />
				<PrivateRoute path="/enrollcourse" component={EnrollCourse} />
				<PrivateRoute path="/courses" component={Course} />
			</Switch>
		</Router>
	);
}

export default App;
