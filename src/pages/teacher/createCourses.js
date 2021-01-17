import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import Layout from "../../layout/layout";

export default function CreateCourses() {
	const [name, setName] = useState("");
	const [code, setCode] = useState("");
	const [teacherName, setTeacherName] = useState("");
	const [day, setDay] = useState("monday");

	const handleChange = (event) => {
		console.log(event.target.name);
		if (event.target.name === "name") {
			setName(event.target.value);
		} else if (event.target.name === "day") {
			setDay(event.target.value);
		} else if (event.target.name === "teacherName") {
			setTeacherName(event.target.value);
		} else if (event.target.name === "code") {
			setCode(event.target.value);
		}
	};

	const addCourse = () => {
		const courses = {
			name: name,
			code: code,
			teacherName: teacherName,
			day: day,
			studentsEnrolled: [],
		};
		fetch("http://localhost:8001/api/courses/add", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(courses),
		})
			.then((response) => response.json())
			.then((data) => {
				alert(`${data.code} Registered`);
			})
			.then(() => {
				setName("");
				setCode("");
				setTeacherName("");
			});
	};
	return (
		<Layout>
			<Col className="layout">
				<h1 className="text-center"> Welcome to Course Registeration System</h1>

				<Col className="course-create">
					<h4 className="text-center"> Register a new course</h4>
					<Form>
						<Form.Group controlId="formBasicName">
							<Form.Label>Course Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Course Name"
								name="name"
								onChange={handleChange}
								value={name}
								required
							/>
							<Form.Text>Please enter the valid course name here</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicCode">
							<Form.Label>Course code</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Course Code"
								name="code"
								onChange={handleChange}
								value={code}
								required
							/>
							<Form.Text>Please enter the valid course code here</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicTeacher">
							<Form.Label>Teacher Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Teacher Name"
								name="teacherName"
								onChange={handleChange}
								value={teacherName}
								required
							/>
							<Form.Text>Please enter the valid teachers name here</Form.Text>
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Label>Select Day</Form.Label>
							<Form.Control
								as="select"
								onChange={handleChange}
								name="day"
								required
							>
								<option>Select a day</option>
								<option value="monday">Monday</option>
								<option value="tuesday">Tuesday</option>
								<option value="wednesday">Wednesday</option>
								<option value="thursday">Thursday</option>
								<option value="friday">Friday</option>
							</Form.Control>
						</Form.Group>
						<br />
						<Button variant="primary" onClick={addCourse} size="lg" block>
							Create Course
						</Button>
					</Form>
				</Col>
			</Col>
		</Layout >
	);
}
