import React from 'react';
import TopBar from './homebar/topbar';
import HomePage from './homepage/HomePage';

// Variable to control whether user is logged in (as Administrator).
// Sent as a prop to any components that render differently based on admin status.
const isAdmin = true;

function App() {
    return(
        <div>
            <TopBar isAdmin={isAdmin} />
            <HomePage isAdmin={isAdmin} />
        </div>
    );
}

export default App;