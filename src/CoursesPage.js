import Header from "./Header.js"
import EnrollmentList from "./EnrollmentList.js"
import CourseCatalog from "./CourseCatalog.js"
// import Footer from "./Footer.js"


function CoursesPage() {
    return (
        <div className="courses-page">
            <Header />
            <div className="content">
                <CourseCatalog />
                <EnrollmentList />
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default CoursesPage;
