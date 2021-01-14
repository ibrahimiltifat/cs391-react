import React, { useState,useEffect } from 'react';

function EnrollCourse() {

    const [currentUser, setCurrentUser] = useState('');


    useEffect(() => {

        setCurrentUser(JSON.parse(sessionStorage.getItem('currentUser'))?.name)
    },[])

    function enrollCourse(course) {
        console.log(course)
    }

    function withdrawCourse(course) {
        console.log(course)
    }

    const TableCourses = () => {
        return (
            <table class="table table-checkout" id="table" >
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
            <table class="table table-checkout" id="table" >
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
        let courses = localStorage.getItem("courses") ? JSON.parse(localStorage.getItem("courses")) : [];


        return <tbody >
            {courses.map((row) => (
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
                <div class="col mt-4">
                    <h1>List of courses</h1>
                    <TableCourses />
                </div>
            </div>
            <div className="row">
                <div class="col mt-4">
                    <h1>My Enrolled Courses</h1>

                    <TableMyCourses />
                </div>
            </div>
        </div >
    );


}

export default EnrollCourse;
