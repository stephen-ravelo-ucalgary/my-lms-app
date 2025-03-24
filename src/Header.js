import "./Header.css";
import logo from "./images/logo.jpg";

function Header() {
    return (
        <div>
            <header>
                <img src={logo} alt="LMS Logo" />
                <h1>LMS - Learning Management System</h1>
            </header>
            <nav>
                <a href="login.html">Login</a>
                <a href="leaderboard.html">Leaderboard</a>
                <a href="#about">About LMS</a>
            </nav>
        </div>
    );
}

export default Header;
