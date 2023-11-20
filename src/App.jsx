import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopBar from './homebar/topbar';
import HomePage from './homepage/HomePage';
import SignUp from './signup/SignUp';
import Login from './login/Login';

// Variable to control whether user is logged in (as Administrator).
// Sent as a prop to any components that render differently based on admin status.
const isAdmin = true;

function App() {
    return(
        <Router>
            <div>
                <TopBar isAdmin={isAdmin} />
                <Routes>
                    <Route exact path='/' element={<HomePage isAdmin={isAdmin} />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<Login />} />
                    { /* TODO: Add routes for AddItem component when it is completed. */ }

                    <Route path='*' element={<p>404 Page not Found</p>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;