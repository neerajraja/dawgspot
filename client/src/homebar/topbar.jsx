import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './topbar.css';

function TopBar() {
  const [token, setToken] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem('auth-token'))
  }, []);

  function logout() {
    if (token) {
      localStorage.removeItem('auth-token');
      setToken(null);
      navigate('/');
      window.location.reload();
    }
  }

  return (
    <div className="top-bar">
      <Link to="/" className="logo">Dawgspot</Link>
      { token
        ? <Link to='/additem' className="custom-link">Add New Game</Link>
        : <></>
      }
      { token
        ? <p className="custom-link" onClick={logout}>Logout</p>
        : <>
            <Link to='/signup' className="custom-link">Sign Up</Link>
            <Link to='/login' className="custom-link">Login</Link>            
          </>
      }
    </div>
  );
}

export default TopBar;
