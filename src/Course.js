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
				let temp = [];
				data.forEach((item) => {
					item.studentsEnrolled.forEach((id) => {
						if (id === user._id) temp.push(item);
					});
				});
				console.log(temp);
				return temp;
			})
			.then((list) => setCourses(list));
	};

	React.useEffect(() => {
		fetchCourse();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleWithdraw = (e, course) => {
		e.preventDefault();
		const index = course.studentsEnrolled.indexOf(user._id);
		if (index > -1) {
			course.studentsEnrolled.splice(index, 1);
		}
		console.log(course);
		fetch("http://localhost:8001/api/courses/drop", {
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
									<Button onClick={(e) => handleWithdraw(e, course)}>
										Withdraw
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
