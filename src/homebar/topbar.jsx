import React from 'react';
import './topbar.css';

function TopBar(props) {
  return (
    <div className="top-bar">
      <div className="logo">Dawgspot</div>
      <div className="custom-link">View All Games</div>
      { props.isAdmin
        ? <div className="custom-link" id="admin-view">View Admin Panel</div> 
        : <></> // Optionally render this element based on the value of props.isAdmin 
      }
      <div className="custom-link" id="login-logout">{props.isAdmin ? "Logout" : "Login"}</div>
    </div>
  );
}

export default TopBar;
