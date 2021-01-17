import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

function Menu() {
	let history = useHistory();
	const user = JSON.parse(localStorage.getItem("user"));

	const handleSignOut = () => {
		localStorage.removeItem("user");
		history.push("/");
	};
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand>Course Registration System</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					{user.type === "teacher" ? (
						<>
							<Nav.Link>
								<Link to="/mycourses">All Courses</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to="/addcourses">Add Courses</Link>
							</Nav.Link>
						</>
					) : (
						<>
							<Nav.Link>
								<Link to="/courses">Registered Courses</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to="/enrollcourse">Enroll a new Courses</Link>
							</Nav.Link>
						</>
					)}
				</Nav>
			</Navbar.Collapse>
			<Button onClick={handleSignOut}>Sign Out</Button>
		</Navbar>
	);
}

export default Menu;
