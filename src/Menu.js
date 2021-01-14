import React from 'react';
import {
  useHistory
} from "react-router-dom";



function Menu() {

  let history = useHistory();


  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Course Registration System</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" onClick={() => history.push("/")}>Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => history.push("/courses")}>Register Courses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => history.push("/enrollcourse")}>Enroll Courses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => history.push("/loginstudent")}>Login Student</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => history.push("/teacher")}>Login Teacher</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
