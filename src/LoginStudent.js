import React, { useState } from "react";
import { Col, Container, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function LoginStudent() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let history = useHistory();

	const handleChange = (event) => {
		if (event.target.name === "email") {
			setEmail(event.target.value);
		} else if (event.target.name === "password") {
			setPassword(event.target.value);
		}
	};

	function handleLogin() {
		fetch("http://localhost:8001/api/students/login", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		})
			.then((response) => response.json())
			.then((data) => {
                if(data===null)
                alert("Wrong email password combination");
                else {
                localStorage.setItem("user", JSON.stringify(data));
               history.push('/courses')
            }
            })
	}

	return (
		<Container>
			<Col className="layout">
				<h1 className="text-center"> Welcome to Course Registration System</h1>
				<Col className="content" md="12">
					<Col className="sigin-form">
						<h2 className="text-center"> Student Sign In Page</h2>
						<br />
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									name="email"
									placeholder="Enter email"
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									name="password"
									placeholder="Password"
									onChange={handleChange}
									required
								/>
							</Form.Group>
							<br />
							<Button variant="primary" onClick={handleLogin} size="lg" block>
								Sign In
							</Button>
							<br />
							<p className="text-center">Or</p>
							<p className="text-center">
								Sign as <Link to="/teacher">Teacher</Link>
							</p>
						</Form>
					</Col>
				</Col>
			</Col>
		</Container>
	);
}

export default LoginStudent;
