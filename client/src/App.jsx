import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopBar from './homebar/topbar';
import HomePage from './homepage/HomePage';
import SignUp from './signup/SignUp';
import Login from './login/Login';
import AddItem from './additem/AddItem';

import ErrorPage from './ErrorPage/ErrorPage';
import UserContext from '../../server/context/UserContext';

function App() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    });
    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem('auth-token');
            if(token === null) {
                localStorage.setItem('auth-token', '');
                token = '';
            } // if
            const tokenResponse = await axios.post('http://localhost:8082/tokenIsValid', null, { headers: { 'x-auth-token': token } });
            if(tokenResponse.data) {
                const userRes = await axios.get('http://localhost:8082/', { headers: { 'x-auth-token': token } });
                setUserData({
                    token,
                    user: userRes.data
                });
            }
        };
        checkLoggedIn();
    }, []);
    const toggleIsAdmin = prevIsAdmin => setIsAdmin(!prevIsAdmin);

    return(
        <UserContext.Provider value={{ userData, setUserData }}>
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
        </UserContext.Provider>
    );
}

export default App;