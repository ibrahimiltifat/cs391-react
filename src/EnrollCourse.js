import React, { useState, useEffect } from 'react';
import {
    useHistory
} from "react-router-dom";
function EnrollCourse() {

    const [currentUser, setCurrentUser] = useState('');



    let history = useHistory();

    useEffect(() => {


        setCurrentUser(sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')) : undefined);
        if (!currentUser || !JSON.parse(sessionStorage.getItem('currentUser')).isStudent) {
            alert("You cant enter that page, you have to sign in as Student");
            history.push('/loginstudent')
        }
    }, [])


    function enrollCourse(course) {

        let usersCourse = getSelectedUsersCourses();
        if (usersCourse.user === undefined) {
            usersCourse.user = currentUser;
        }
        usersCourse.courses.push(course)

        let courses = localStorage.getItem("enrolledCourses") ? JSON.parse(localStorage.getItem("enrolledCourses")) : [usersCourse];

        for (let i = 0; i < courses.length; i++) {
            if (courses[i].user == currentUser) {
                for (let j = 0; j < courses[i].courses.length; j++) {
                    if (course.courseName == courses[i].courses[j].courseName) {
                        alert("You are already enrolled that course");
                        return;
                    }
                }

                courses[i].user = currentUser;
                courses[i].courses = usersCourse.courses;

                break;
            }
        }
        localStorage.setItem("enrolledCourses", JSON.stringify(courses));

        window.location.reload()
    }

    function getSelectedUsersCourses() {
        let courses = localStorage.getItem("enrolledCourses") ? JSON.parse(localStorage.getItem("enrolledCourses")) : [];


        let coursesOfUser = undefined;
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].user === currentUser) {
                coursesOfUser = courses[i];
                break;
            }
        }
        return coursesOfUser ? coursesOfUser : { user: undefined, courses: [] };
    }

    function withdrawCourse(course) {
        console.log(course)
    }

    const TableCourses = () => {
        return (
            <table className="table table-checkout" id="table" >
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Course Code</th>
                        <th>Teacher</th>
                        <th>Weekday</th>
                        <th>Enroll</th>
                    </tr>
                </thead>
                <CoursesBody />
            </table >
        );
    }
    const TableMyCourses = () => {
        return (
            <table className="table table-checkout" id="table" >
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Course Code</th>
                        <th>Teacher</th>
                        <th>Weekday</th>
                        <th>Withdraw</th>
                    </tr>
                </thead>
                <MyCoursesBody />
            </table >
        );
    }
    const CoursesBody = () => {
        let courses = localStorage.getItem("courses") ? JSON.parse(localStorage.getItem("courses")) : [];


        return <tbody >
            {courses.map((row) => (
                <tr>
                    <td>{row.courseName} </td>
                    <td>{row.courseCode}</td>
                    <td>{row.teacher}</td>
                    <td>{row.weekday}</td>
                    <td><button onClick={() => enrollCourse(row)}>Enroll</button></td>
                </tr>
            ))}
        </tbody>;
    }


    const MyCoursesBody = () => {
        let courses = localStorage.getItem("enrolledCourses") ? JSON.parse(localStorage.getItem("enrolledCourses")) : [];


        let coursesOfUser = undefined;
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].user === currentUser) {
                coursesOfUser = courses[i].courses;
                break;
            }
        }

        return <tbody >
            {coursesOfUser && coursesOfUser.map((row) => (
                <tr>
                    <td>{row.courseName} </td>
                    <td>{row.courseCode}</td>
                    <td>{row.teacher}</td>
                    <td>{row.weekday}</td>
                    <td><button onClick={() => withdrawCourse(row)}>Withdraw</button></td>
                </tr>
            ))}
        </tbody>;
    }


    return (
        <div>
            <h2>Hello , {currentUser && currentUser}</h2>
            <div className="row mt-4">
                <div className="col mt-4">
                    <h1>List of courses</h1>
                    <TableCourses />
                </div>
            </div>
            <div className="row">
                <div className="col mt-4">
                    <h1>My Enrolled Courses</h1>

                    <TableMyCourses />
                </div>
            </div>
        </div >
    );


}

export default EnrollCourse;
