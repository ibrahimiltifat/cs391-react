import React, { useState} from 'react';


function LoginTeacher() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function onButtonClick() {
        validateUser(email, password);
    }

    const validateUser = (email, password) => {
        const testUsers = [
            {
                email: 'erdem.gonul@ozu.edu.tr',
                password: 'admin1234'
            },
            {
                email: 'ahmet.gonul@ozu.edu.tr',
                password: 'admin1234'
            },
            {
                email: 'deneme.gonul@ozu.edu.tr',
                password: 'admin1234'
            }
        ]

        localStorage.setItem('users', JSON.stringify(testUsers));
        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : undefined;

        if (users !== undefined) {
            console.log("ee", users)
            let isFailed = true;
            for (let i = 0; i < users.length; i++) {
                const user = users[i];
                console.log(email, password)
                if (user.email === email && user.password === password) {
                    alert("Successful login");
                    isFailed = false;
                    break;
                }
            }
            if (isFailed) {
                alert("Wrong email password combination");
            }
        }

    };

    return (
        <div className="row mt-5">
            <div className="col m bg-light  align-middle">
                <h4>Please enter your username and password</h4>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} value={email} aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} id="exampleInputPassword1" placeholder="Password" />
                </div>
                <p><a href="../">Sign In</a> as Student</p>
                <div id="errorMessage">

                </div>
                <button id="login" type="submit" className="btn btn-primary" onClick={() => onButtonClick()}>
                    Login
				</button>
            </div>
            <div className="col align-middle">
                <h2 >welcome to the course registration system</h2>
            </div>
        </div>
    );


}

export default LoginTeacher;
