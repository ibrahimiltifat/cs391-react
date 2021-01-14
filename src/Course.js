import React, { useState } from 'react';

function Course() {

    const [courseName, setCourseName] = useState('');
    const [teacher, setTeacher] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [weekDay, setWeekDay] = useState('');


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
            <table class="table table-checkout" id="table" >
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
                <div class="col mt-4">
                    <h1>Enrolling courses For Students</h1>
                    <h2>Please enter your course details:</h2>

                    <div class="form-input">
                        <input id="coursename" name="coursename" placeholder="Math103" onChange={(e) => setCourseName(e.target.value)} value={courseName} />
                    </div>
                    <div class="form-input">
                        <input id="teacher" name="teacher" placeholder="Esma Meral" onChange={(e) => setTeacher(e.target.value)} value={teacher} />
                    </div>
                    <div class="form-input">
                        <input id="coursecode" name="coursecode" placeholder="CS391" onChange={(e) => setCourseCode(e.target.value)} value={courseCode} />
                    </div>
                    <div class="form-input">
                        <input id="weekday" name="weekday" placeholder="Friday" onChange={(e) => setWeekDay(e.target.value)} value={weekDay} />
                    </div>
                    <button type="submit" name="submit" value="Register" id="btn" onClick={() => saveCourse()}>Register Course</button>
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
