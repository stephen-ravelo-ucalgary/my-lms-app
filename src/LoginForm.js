import "./LoginForm.css";

import Header from "./Header";
import Footer from "./Footer";

import React, { useState, useEffect } from "react";

var count = 2;
function redirect() {
    if (count < 2) window.location.href = "course_view.html";
    count -= 1;
}

function LoginForm() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Fetch data from an API
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                // Set the fetched data to the state
                setData(data.results[0]);
                // Set loading to false once data fetching is complete
                setIsLoading(false);
            })
            .catch((error) => {
                // Handle errors
                console.error("Error fetching data:", error);
                // Set loading to false in case of an error
                setIsLoading(false);
            });
    }, []);

    let usernameInput = "";
    let passwordInput = "";
    
    function validateInput() {
        usernameInput = document.getElementById("username").value;
        passwordInput = document.getElementById("password").value;        

        let result = document.getElementById("result");

        if (!usernameInput || !passwordInput || passwordInput.length < 8) {
            result.textContent = "Invalid username or password!";
            return;
        }

        let success = false;
        data.forEach((user) => {
            let { username, email } = user;
            if (usernameInput === username && passwordInput === email) {
                success = true;
            }
        });

        if (success) {
            result.textContent = "Login successful! Redirecting...";
            setInterval(redirect, 1000);
        } else {
            result.textContent = "Invalid username or password!";
        }
    }

    return (
        <div>
            <Header />
            <main class="login">
                <h2>LMS Login</h2>
                <form>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                    <br />
                    <br />
                    <label for="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                    <br />
                </form>
                <br />
                <br />
                {isLoading ? (
                    <button>Loading...</button>
                ) : (
                    <button onclick={validateInput()}>Login</button>
                    )
                }
                <br />
                <br />
                <a href="#">Forgot Password?</a>
                <br />
                <br />
                <div class="result">
                    <p id="result"></p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default LoginForm;
