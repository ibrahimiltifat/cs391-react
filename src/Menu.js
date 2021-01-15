import React, { useState, useEffect } from 'react';
import {
  useHistory
} from "react-router-dom";



function Menu() {


  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {


    setCurrentUser(sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')) : undefined);
  }, [])

  let history = useHistory();


  function signOut() {
    sessionStorage.removeItem("currentUser");
    window.location.reload();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Course Registration System</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" onClick={() => history.push("/")}>Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => history.push("/courses")}>Register Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => history.push("/enrollcourse")}>Enroll Courses</a>
          </li>


        </ul>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          {!currentUser && <><li className="nav-item">
            <a className="nav-link" onClick={() => history.push("/loginstudent")}>Login Student</a>
          </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => history.push("/teacher")}>Login Teacher</a>
            </li></>}

          {currentUser && <li className="nav-item">
            <a className="nav-link disabled" onClick={() => history.push("/teacher")}>Logged as {currentUser.isStudent ? 'Student' : 'Teacher'},{currentUser.name}</a>
          </li>}
          {currentUser &&
            <li className="nav-item">
              <a className="nav-link" onClick={() => signOut()}>Sign Out</a>
            </li>
          }
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
