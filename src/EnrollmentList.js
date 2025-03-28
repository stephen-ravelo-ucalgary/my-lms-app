// imports
import "./EnrollmentList.css";
import courses from "./data/courses.js";
import React, {useState, useEffect} from 'react';


function EnrolledCourse(props) {
    // const [count, setCount] = useState(null);
    // iterate through courses then only dispaly if its value is greater than 0

    let courseName = courses[props.id - 1]["name"];
    let duration = courses[props.id - 1]["duration"];
    return (
        <div className="enrolledCourse">
            <p>Course Name: {courseName}</p>
            <p>Credit Hours: {duration}</p>
            <button>Drop Course</button>
        </div>
    );
}

function EnrollmentList() {
    // load date
    const [count1, setCount1] = useState(localStorage.getItem(1));
    const [count2, setCount2] = useState(localStorage.getItem(2));
    const [count3, setCount3] = useState(localStorage.getItem(3));
    const [count4, setCount4] = useState(localStorage.getItem(4));
    const [count5, setCount5] = useState(localStorage.getItem(5));
    const [count6, setCount6] = useState(localStorage.getItem(6));
    const [count7, setCount7] = useState(localStorage.getItem(7));
    const [count8, setCount8] = useState(localStorage.getItem(8));
    const [count9, setCount9] = useState(localStorage.getItem(9));
    const [count10, setCount10] = useState(localStorage.getItem(10));

    // when values are updated
    useEffect(() => {

    }, [count1, count2, count3, count4, count5, count6, count7, count8, count9, count10]);

    window.addEventListener("storage", () => {
        setCount1(localStorage.getItem(1));
        setCount2(localStorage.getItem(2));
        setCount3(localStorage.getItem(3));
        setCount4(localStorage.getItem(4));
        setCount5(localStorage.getItem(5));
        setCount6(localStorage.getItem(6));
        setCount7(localStorage.getItem(7));
        setCount8(localStorage.getItem(8));
        setCount9(localStorage.getItem(9));
        setCount10(localStorage.getItem(10));

    });

    // maybe have the ternary operator in the return instead?
    // so that only the courses with > 0 enrollment count get displayed

    // new problem, clicking enroll now doesnt update the enrolled courses part of the page
    // might need to use useEffect somehow to detect a change in one of the counts
    // new problem, how do i get this file to update its count values
    // when you click on enroll now in the other file
    return (
        <div className="enrollmentList">
            <h2>Enrolled Courses</h2>
            <hr></hr>
            <br></br>
            {parseInt(count1) == 0 || count1 == null ? null : <EnrolledCourse id={1} />}
            {parseInt(count2) == 0 || count2 == null ? null : <EnrolledCourse id={2} />}
            {parseInt(count3) == 0 || count3 == null ? null : <EnrolledCourse id={3} />}
            {parseInt(count4) == 0 || count4 == null ? null : <EnrolledCourse id={4} />}
            {parseInt(count5) == 0 || count5 == null ? null : <EnrolledCourse id={5} />}
            {parseInt(count6) == 0 || count6 == null ? null : <EnrolledCourse id={6} />}
            {parseInt(count7) == 0 || count7 == null ? null : <EnrolledCourse id={7} />}
            {parseInt(count8) == 0 || count8 == null ? null : <EnrolledCourse id={8} />}
            {parseInt(count9) == 0 || count9 == null ? null : <EnrolledCourse id={9} />}
            {parseInt(count10) == 0 || count10 == null ? null : <EnrolledCourse id={10} />}

            <br></br>
        </div>
    );
}

export default EnrollmentList;
