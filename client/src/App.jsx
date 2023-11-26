import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopBar from './homebar/topbar';
import HomePage from './homepage/HomePage';
import SignUp from './signup/SignUp';
import Login from './login/Login';
import AddItem from './additem/AddItem';

import ErrorPage from './ErrorPage/ErrorPage';

function App() {
    const [isAdmin, setIsAdmin] = useState(false);
    const toggleIsAdmin = prevIsAdmin => setIsAdmin(!prevIsAdmin);

    return(
        <Router>
            <div>
                <TopBar isAdmin={isAdmin} toggleIsAdmin={toggleIsAdmin}/>
                <Routes>
                    <Route exact path='/' element={<HomePage isAdmin={isAdmin} />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<Login toggleIsAdmin={toggleIsAdmin} />} />
                    <Route path='/additem' element={<AddItem />} />

                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;