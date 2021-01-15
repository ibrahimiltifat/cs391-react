import React, { useState, useEffect } from 'react';
import {
    useHistory
} from "react-router-dom";

function Course() {

    const [courseName, setCourseName] = useState('');
    const [teacher, setTeacher] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [weekDay, setWeekDay] = useState('');


    const [currentUser, setCurrentUser] = useState(undefined);
    let history = useHistory();

    useEffect(() => {


        setCurrentUser(sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')) : undefined);
        if (!currentUser || JSON.parse(sessionStorage.getItem('currentUser')).isStudent) {
            alert("You cant enter that page, you have to sign in as Teacher");
            history.push('/teacher')
        }
    }, [])

    function saveCourse() {
        if (courseName.length > 0 && teacher.length > 0 && courseCode.length > 0 && weekDay.length > 0) {
            let course = {
                courseName: courseName,
                teacher: teacher,
                courseCode: courseCode,
                weekday: weekDay,
            }
            let courses = localStorage.getItem("courses") ? JSON.parse(localStorage.getItem("courses")) : [];
            courses.push(course);
            localStorage.setItem("courses", JSON.stringify(courses));

            window.location.reload();
        } else {
            alert('You have to fill all empty inputs')
        }
    }

    const Table = () => {
        return (
            <table className="table table-checkout" id="table" >
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Course Code</th>
                        <th>Teacher</th>
                        <th>Weekday</th>
                    </tr>
                </thead>
                <Courses />
            </table >
        );
    }
    const Courses = () => {
        let courses = localStorage.getItem("courses") ? JSON.parse(localStorage.getItem("courses")) : [];

        var rows = "";
        courses.map((row) => {
            var currentRow = '<tr><td>' + row.courseName + '</td><td>' + row.courseCode + '</td><td>' + row.teacher + '</td><td>' + row.weekday + '</td></tr>';
            rows = rows + currentRow;
        })

        return <tbody dangerouslySetInnerHTML={{ __html: rows }}></tbody>;
    }

    return (
        <div>
            <div className="row">
                <div className="col mt-4">
                    <h1>Enrolling courses For Students</h1>
                    <h2>Please enter your course details:</h2>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Course Name</label>
                        <input type="text" id="coursename" name="coursename" placeholder="Introduction To Mathematic" onChange={(e) => setCourseName(e.target.value)} value={courseName} className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Course Teacher</label>
                        <input type="text" id="teacher" name="teacher" placeholder="Esma Meral" onChange={(e) => setTeacher(e.target.value)} value={teacher} className="form-control" id="exampleInputEmail1" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Course Code</label>
                        <input type="text" id="coursecode" name="coursecode" placeholder="CS391" onChange={(e) => setCourseCode(e.target.value)} value={courseCode} className="form-control" id="exampleInputEmail1" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Course Day</label>
                        <input type="text" id="weekday" name="weekday" placeholder="Friday" onChange={(e) => setWeekDay(e.target.value)} value={weekDay} className="form-control" id="exampleInputEmail1" />
                    </div>
                    <button id="login" type="submit" value="Register" id="btn" className="btn btn-primary" onClick={() => saveCourse()}>
                        Register Course
				</button>

                </div>
            </div>
            <div className="row mt-4">
                <h1>List of courses</h1>
                <Table />
            </div>
        </div >
    );


}

export default Course;
