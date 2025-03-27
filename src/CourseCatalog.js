import courses from "./data/courses.js"
import "./CourseCatalog.css";
import React, { useState } from 'react';


function showDescription(showDesc, id) {
    if(showDesc == true) {
        document.getElementById(id).style.display = 'none';
    }
    else {
        document.getElementById(id).style.display = 'block';
    }
}

function CourseItem(props) {
    const [showDesc, setShowDesc] = useState(false);
    const handleMouseEnter = () => {
        setShowDesc(true);
        showDescription(showDesc, props.id);
    };

    const handleMouseLeave = () => {
        setShowDesc(false);
        showDescription(showDesc, props.id);
    };

    return (
        <td onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={require("/" + props.image)} alt="missing image"></img>
            <p>Course Name: {props.name}</p>
            <p>Instructor: {props.instructor}</p>
            <p className="description" id={props.id}>Description: {props.description}</p>
            <button>Enroll Now</button>
        </td>
    );
}

// make hover better, not hard coded
// need to assign course id as td's id
// need to be able to show course description on hover using td's id somehow while also using useState
// 

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
