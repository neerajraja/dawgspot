import React from "react";
import { Link } from 'react-router-dom';
import "./Login.css";

function Login(props) {

    function loginHandler(event) {
        //event.preventDefault();
        props.toggleIsAdmin();
    }

    return (
        <div id="login-container" className="container">
            <h1 id="login-header">Login</h1>
            <form onSubmit={loginHandler}>
                <input id="login-username-box" type="text" placeholder="Username..." className="input-box" />
                <br />
                <input id="login-password-box" type="password" placeholder="Password..." className="input-box" />
                <div className="login-buttons">
                    <Link to="/signup" className="generic-button" id="signup-button">Sign Up</Link>
                    <Link to="/" className="generic-button" id="login-button" onClick={loginHandler}>Login</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;