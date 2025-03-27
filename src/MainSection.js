import { useEffect } from "react";
import "./MainSection.css";
import courses from "./data/courses.js"
import testimonials from "./data/testimonials.js"

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function Course({ courseID }) {
    let course = courses[courseID - 1];
    let validTestimonials = []
    useEffect(() => {
        for (let i = 0; i < testimonials.length; i++) {
            if (testimonials[i].courseName === course.name)
                validTestimonials.push(testimonials[i]);
        }
        shuffleArray(validTestimonials);
    });
    return (
        <div>
            <img src={require("/" + course.image)} alt="Course" />
            <p>{course.name}</p>
            <p>{course.instructor}</p>
            <p>{course.description}</p>
            <p>{course.duration}</p>
        </div>
    );
}

function Testimonial({ testimonialIndex }) {
    let testimonial = testimonials[testimonialIndex];
    let rating = testimonial.rating;
    let starRating = "";
    for (let i = 0; i < 5; i++) {
        if (rating > 0) 
            starRating += "★";
        else
            starRating += "☆";
        rating -= 1;
    }
    return (
        <div>
            <p>{starRating}</p>
            <p>{testimonial.courseName}</p>
            <p>{testimonial.studentName}</p>
            <p>{testimonial.review}</p>        
        </div>
    );
}



function MainSection() {
    
    return (
        <div>
            <main>
                <h2>About LMS</h2>
                <p>
                    The Learning Management System (LMS) helps students and
                    instructors manage courses, quizzes, and track
                    performance efficiently.
                </p>
                <h3>Key Features:</h3>
                <div>
                    <p>- Enroll in courses</p>
                    <p>- Attempt quizzes</p>
                    <p>- View leaderboards</p>
                </div>
                <table>
                    <tr>
                        <td>
                            <Course courseID={1} />
                        </td>
                        <td>
                            <Course courseID={2} />
                        </td>
                        <td>
                            <Course courseID={3} />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                            <Testimonial testimonialIndex={0} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Testimonial testimonialIndex={1} />
                        </td>
                    </tr>
                </table>
            </main>
        </div>
    );
}

export default MainSection;
