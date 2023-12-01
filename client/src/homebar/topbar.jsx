import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';

function TopBar() {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem('auth-token'))
  }, []);

  return (
    <div className="top-bar">
      <Link to="/" className="logo">Dawgspot</Link>
      { token
        ? <Link to='/additem' className="custom-link">Add New Game</Link>
        : <></>
      }
      { token
        ? <Link to='/' className="custom-link">Logout</Link>
        : <>
            <Link to='/signup' className="custom-link">Sign Up</Link>
            <Link to='/login' className="custom-link">Login</Link>            
          </>
      }
    </div>
  );
}

export default TopBar;
