
import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
// imports for auth & backend
import axios from 'axios';
import UserContext from "../../../server/context/UserContext.js";
import { set } from 'mongoose';



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
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {setUserData} = useContext(UserContext);

    /**
     * @author Cannon M. Hutcheson
     * @version 0.0.1
     * @function handleSubmit - a function that handles the submission of a form
     * @param {Event} e - the event that triggered the function
     * @returns {void} - returns nothing
     * @description - Creates a new user and logs them in
    */
    const handleSubmit = async (e) => { // double check to make sure cP = P
        e.preventDefault();
        setLoading(true);
        try {
          newUser = {
            email: email,
            password: password,
            username: username,
            avatar: profilePic,
          }
          await axios.post('http://localhost:8082/api/users/signup', newUser);
          const loginRes = await axios.post('http://localhost:8082/api/users/login', {
            email,
            password
          });
          setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user
          });
          localStorage.setItem("auth-token", loginRes.data.token);
          setLoading(false);
          navigate('/');
        } catch (err) {
          err.response.data.msg && setError(err.response.data.msg);
        }
    } // handleSubmit

  return (
    <div className="SignUp">
      <nav className="nav">
        <h2>DawgSpot</h2>
      </nav>
      
      <form onSubmit={handleSubmit}>

        <h1>Sign Up</h1>
        <hr className="hr"/>
        
        <input className="username-entry" placeholder='Username' type="text" id="username" name="username" required onChange={(e) => setUsername(e.target.value)}/>

        
        <input placeholder='Password' type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)}/>

        
        <input placeholder='Confirm password' type="password" id="confirmPassword" name="confirmPassword" required onChange={(e) => setConfirm(e.target.value)} />

        <input placeholder="Profile Pic"  type="text" onChange={(e) => setProfilePic(e.target.value)}/>
        
        <input placeholder="Email" type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <div className="bottom-btns">
        <button type="submit" className="pill-btn" disabled={loading}>Submit</button>
        <Link to="/login" className="pill-btn">Login</Link>
        </div>
      </form>
    </div>
  );
}
