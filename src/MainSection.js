import course1 from "./images/course1.jpg";

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
            <section class="Enrolled">
                <h2>Featured Courses</h2>
                <hr />
                <table class="cv" id="table1">
                    <tr>
                        <td
                            id="course_tile1"
                            onmouseover="highlightTile('course_tile1')"
                            onmouseout="unhighlightTile('course_tile1')"
                        >
                            <div>
                                <img src={course1} alt="Course 1" />
                                <p>Course Name: Web Development</p>
                                <p>Course Code: WD381</p>
                                <a href="attempt_quiz.html">Attempt Quiz</a>
                            </div>
                        </td>
                        <td
                            id="course_tile2"
                            onmouseover="highlightTile('course_tile2')"
                            onmouseout="unhighlightTile('course_tile2')"
                        >
                            <div>
                                <img src={course1} alt="Course 1" />
                                <p>Course Name: Data Structures</p>
                                <p>Course Code: DS371</p>
                                <a href="attempt_quiz.html">Attempt Quiz</a>
                            </div>
                        </td>
                        <td
                            id="course_tile3"
                            onmouseover="highlightTile('course_tile3')"
                            onmouseout="unhighlightTile('course_tile3')"
                        >
                            <div>
                                <img src={course1} alt="Course 1" />
                                <p>Course Name: Database Systems</p>
                                <p>Course Code: DB346</p>
                                <a href="attempt_quiz.html">Attempt Quiz</a>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>
        </div>
    );
}

export default MainSection;
