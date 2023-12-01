import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage({errorText}) {
    return(
        <div className="errorpagecontainer">
            <p className="errorpagetext">{errorText}</p>
            <Link to="/" id="return-button">Return Home</Link>
        </div>
    )
}

export default ErrorPage;