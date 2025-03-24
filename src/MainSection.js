import course1 from "./images/course1.jpg";
import courses from "./data/courses.js"


function FeaturedCourses() {
    let uniqueRandomCourses = [];
    console.log(uniqueRandomCourses);
    
    for (let i = 0; i < 3; i++) {
        let notDone = true;
        let newCourse;
        while (notDone) {
            newCourse = courses[Math.random() * courses.length];
            if (uniqueRandomCourses.includes(newCourse))
                continue;
            notDone = false;
        }
        uniqueRandomCourses.push(newCourse);
    }
    //uniqueRandomCourses.push(courses[1]);

    return (
        <div>
            <h2>Featured Courses</h2>
            {uniqueRandomCourses.map(function (course) {
                return (
                    <div>
                        <p>{course.id}</p>
                    </div>
                );
            })}
        </div>
    );
}
        //<td id="course_tile1" onmouseover="highlightTile('course_tile1')" onmouseout="unhighlightTile('course_tile1')">
		//				<div>
        //                    <img src="course1.jpg" alt="Course 1">
        //                    <p>Course Name: Web Development</p>
        //                    <p>Course Code: WD381</p>
        //                    <a href="attempt_quiz.html">Attempt Quiz</a>
        //                </div>
		//			</td>

function MainSection() {
    return (
        <div>
            <main class="index">
                <section id="about">
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
                </section>
            </main>
            <FeaturedCourses />    
        </div>
    );
}

export default MainSection;
