
import { useState } from 'react';
import React from 'react';
import './SignUp.css';


/**
 * @author Cannon M. Hutcheson 
 * @version 0.0.1
 * @function SignUp - a function that returns a JSX element
 * @returns {JSX.Element} - a JSX element
*/
export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirm] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const handleSubmit = (e) => {
        //e.preventDefault(); // why do we not need this?

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (password === '' || confirmPassword === '' || username === '' || email === '' || profilePic === '') {
            alert('Please fill out all fields');
            return;
        }

        const newUser = {
            username: username,
            password: password,
            email: email,
            profilePic: profilePic
        }

        // TODO: send newUser to backend || call event handler from App.jsx
        console.log(newUser);
        setUsername('');
        setPassword('');
        setConfirm('');
        setEmail('');
        setProfilePic('');
    } // handleSubmit

  return (
    <div className="SignUp">
      <nav className="nav">
        <h2>DawgSpot</h2>
      </nav>
      
      <form onSubmit={handleSubmit}>

        <h1>Sign Up</h1>
        <hr className="hr"/>
        
        <input className="username-entry" placeholder='Username' type="text" id="username" name="username" required />

        
        <input placeholder='Password' type="password" id="password" name="password" required />

        
        <input placeholder='Confirm password' type="password" id="confirmPassword" name="confirmPassword" required />

        <input placeholder="Profile Pic"  type="text" />
        
        <input placeholder="Email" type="email" id="email" name="email" required />
        <br />
        <div className="bottom-btns">
        <button type="submit" className="pill-btn">Submit</button>
        <a href="/login" className="pill-btn">Login</a>
        </div>
      </form>
    </div>
  );
}
