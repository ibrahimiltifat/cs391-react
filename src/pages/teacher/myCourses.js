import React from "react";
import Layout from "../../layout/layout";
import { Col, Table } from "react-bootstrap";

export default function MyCourses() {
	const [courses, setCourses] = React.useState([]);
	React.useEffect(() => {
		fetch("http://localhost:8001/api/courses/all")
			.then((response) => response.json())
			.then((data) => {
				setCourses(data)
			});
	},[]);
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
					</tr>
				</thead>
				<tbody>
                    {courses.map(course =>(
                        	<tr key={course}>
                            <td>{course.name}</td>
                            <td>{course.code}</td>
                            <td>{course.teacherName}</td>
                            <td>{course.day}</td>
                        </tr>
                    ))}
				</tbody>
			</Table>
            </Col>
		</Layout>
	);
}
