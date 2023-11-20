import React from "react";
import "./Login.css";

function Login() {
    return (
        <div id="login-container" className="container">
            <h1 id="login-header">Login</h1>
            <form>
                <input id="login-username-box" type="text" placeholder="Username..." className="input-box" />
                <br />
                <input id="login-password-box" type="password" placeholder="Password..." className="input-box" />
                <div className="login-buttons">
                    <button className="generic-button" id="signup-button">Sign Up</button>
                    <button className="generic-button" id="login-button">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;