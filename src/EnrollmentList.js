import "./EnrollmentList.css";
import courses from "./data/courses.js";
import React, {useState, useEffect} from 'react';

function DecrementEnrollmentCount(id) {
    let enrollCount = localStorage.getItem(id);
    if(enrollCount != null) {
        localStorage.setItem(id, parseInt(enrollCount) - 1);
        window.dispatchEvent(new Event("storage"));
    }
}

function EnrolledCourse(props) {
    let courseName = courses[props.id - 1]["name"];
    let duration = courses[props.id - 1]["duration"];
    return (
        <div className="enrolledCourse">
            <p>Course Name: {courseName}</p>
            <p>Credit Hours: {duration}</p>
            <button onClick={() => DecrementEnrollmentCount(props.id)}>Drop Course</button>
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
    const [hours, setHours] = useState(null);

    useEffect(() => {
        SetTotalHours();
    }, []);

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
        SetTotalHours();
    });

    function SetTotalHours() {
        setHours(0);
        var totalHours = 0;
        for(let i = 1; i < 11; i++) {
            if(parseInt(localStorage.getItem(i)) != 0 && localStorage.getItem(i) != null) {
                totalHours += parseInt(courses[i - 1]["duration"]);
            }
        }
        setHours(totalHours);
    }

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
            <div>Total Credit Hours: {hours}</div>
            <br></br>
        </div>
    );
}

export default EnrollmentList;
