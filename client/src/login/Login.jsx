import React, {useState, useContext} from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";

// imports for auth & backend
import axios from "axios";
import UserContext from "../../../server/context/UserContext.js";
import { set } from "mongoose";

function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {setUserData} = useContext(UserContext);

    /**
     * @function loginHandler - a function that handles login
     * @param {Event} e - the event that triggered the function
     * @returns {void} - returns nothing
     * @description - logs in a user
     * @version 0.0.1
     * Last edited 11/28/2023 by Cannon M. Hutcheson
    */
    function loginHandler(e) {
        e.preventDefault();
        // props.toggleIsAdmin(); -- is this needed?
        setLoading(true);
        try {
            const loginUser = { email, password };
            const loginRes = axios.post("http://localhost:8082/api/users/login", loginUser);
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            navigate("/");
            // setLoading(false); -- this may need to be in the catch block
        } catch(err) { 
             err.response.data.msg && setError(err.response.data.msg);
        } // try-catch
    } // loginHandler


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