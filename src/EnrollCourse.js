import React from "react";
import Layout from "./layout/layout";
import { Col, Table, Button } from "react-bootstrap";

export default function EnrollCourse() {
	const [courses, setCourses] = React.useState([]);
 	const user = JSON.parse(localStorage.getItem("user"));

	const fetchCourse = () => {
		fetch("http://localhost:8001/api/courses/all")
			.then((response) => response.json())
			.then((data) => {
				setCourses(data);
			});
	};

	React.useEffect(() => {
		fetchCourse();
	}, []);

	const handleEnroll = (e, course) => {
		e.preventDefault();
		course.studentsEnrolled.push(user._id);
		fetch("http://localhost:8001/api/courses/enroll", {
			method: "PUT",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(course),
		}).then(() => fetchCourse());
	};
	return (
		<Layout>
			<Col className="layout">
				<h1 className="text-center"> List of Registered Courses </h1>
				<Table striped bordered hover className="space">
					<thead>
						<tr>
							<th>Course Name</th>
							<th>Course Code</th>
							<th>Teacher Name</th>
							<th>Weekday</th>
							<th>Enroll</th>
						</tr>
					</thead>
					<tbody>
						{courses.map((course) => (
							<tr key={course}>
								<td>{course.name}</td>
								<td>{course.code}</td>
								<td>{course.teacherName}</td>
								<td>{course.day}</td>
								<td>
									<Button
										onClick={(e) => handleEnroll(e, course)}
										disabled={
											course.studentsEnrolled.filter((id) => id === user._id)
												.length > 0
												? true
												: false
										}
									>
										Enroll
									</Button>
								</td>{" "}
							</tr>
						))}
					</tbody>
				</Table>
			</Col>
		</Layout>
	);
}
