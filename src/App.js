import React, { useEffect } from 'react';
import LoginTeacher from './LoginTeacher.js';
import LoginStudent from './LoginStudent.js';
import Course from './Course.js';
import Menu from './Menu.js';
import EnrollCourse from './EnrollCourse.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  useEffect(() => {
    const testStudents = [
      {
        name: 'erdem',
        email: 'erdem.gonul@ozu.edu.tr',
        password: 'admin1234'
      },
      {
        name: 'ahmet',
        email: 'ahmet.gonul@ozu.edu.tr',
        password: 'admin1234'
      },
      {
        name: 'deneme',
        email: 'deneme.gonul@ozu.edu.tr',
        password: 'admin1234'
      }
    ]


    const testTeachers = [
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

    localStorage.setItem('usersTeachers', JSON.stringify(testTeachers));
    localStorage.setItem('usersStudents', JSON.stringify(testStudents));
  }, []);


  return (
    <div className="container-fluid my-auto ">

      <Router>
        <Menu />
        <Switch>
          <Route path="/teacher">
            <LoginTeacher />
          </Route>
          <Route path="/courses">
            <Course />
          </Route>
          <Route path="/loginstudent">
            <LoginStudent />
          </Route>
          <Route path="/enrollcourse">
            <EnrollCourse />
          </Route>
          <Route path="/">
            <EnrollCourse />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
