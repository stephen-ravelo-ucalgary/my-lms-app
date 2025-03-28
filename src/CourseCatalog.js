import courses from "./data/courses.js"
import "./CourseCatalog.css";
import React, { useState } from 'react';

function IncrementEnrollmentCount(id) {
    let enrollCount = localStorage.getItem(id);
    console.log(enrollCount);
    if(enrollCount == null) {
        localStorage.setItem(id, 1);
        window.dispatchEvent(new Event("storage"));
    }
    else {
        localStorage.setItem(id, parseInt(enrollCount) + 1);
        window.dispatchEvent(new Event("storage"));
    }
}

function CourseItem(props) {
    const [showDesc, setShowDesc] = useState(false);
    
    return (
        <td onMouseEnter={() => setShowDesc(true)} onMouseLeave={() => setShowDesc(false)}>
            <img src={require("/" + props.image)} alt="missing image"></img>
            <p>Course Name: {props.name}</p>
            <p>Instructor: {props.instructor}</p>
            {showDesc ? <p>Description: {props.description}</p> : null}
            <button onClick={() => IncrementEnrollmentCount(props.id)}>Enroll Now</button>
        </td>
    );
}

// need to assign course id as td's id
// need to increment enrollment count of course when clicking on Enroll Now and check if id matches key
// then somehow EnrollmentList should display whatever course is used in EnrolledCourse
// initialize local storage in EnrollmentCourse by setting each course a value of 0 if null

function CourseCatalog() {
    let courseGroup = [[], [], [], []];
    for(let i = 0; i < courses.length; i++) {
        if(courseGroup[0].length < 3) {
            courseGroup[0].push(courses[i]);
        } else if (courseGroup[1].length < 3) {
            courseGroup[1].push(courses[i]);
        } else if (courseGroup[2].length < 3) {
            courseGroup[2].push(courses[i]);
        } else {
            courseGroup[3].push(courses[i]);
        }
    }

    return (
        <div className="courseCatalog">
            <h2>Course Catalog</h2>
            <hr></hr>
            <table className="courseCatalog">
                <tr>
                    {courseGroup[0].map(function (course) {
                        return (
                        <CourseItem image={course["image"]} name={course["name"]} instructor={course["instructor"]} description={course["description"]} id={course["id"]} />
                        );
                    })}
                </tr>
                <br></br>
                <tr>
                    {courseGroup[1].map(function (course) {
                        return (
                        <CourseItem image={course["image"]} name={course["name"]} instructor={course["instructor"]} description={course["description"]} id={course["id"]} />
                        );
                    })}
                </tr>
                <br></br>
                <tr>
                    {courseGroup[2].map(function (course) {
                        return (
                        <CourseItem image={course["image"]} name={course["name"]} instructor={course["instructor"]} description={course["description"]} id={course["id"]} />
                        );
                    })}
                </tr>
                <br></br>
                <tr>
                    {courseGroup[3].map(function (course) {
                        return (
                        <CourseItem image={course["image"]} name={course["name"]} instructor={course["instructor"]} description={course["description"]} id={course["id"]} />
                        );
                    })}
                </tr>
                <br></br>
            </table>
        </div>
    );
}

export default CourseCatalog;
