import TopBar from './homebar/topbar';
import logo from './logo.svg';
import Login from "./login/Login";

// Variable to control whether user is logged in as Administrator.
// Sent as a prop to the TopBar component (for now).
const isAdmin = true;

function Main() {


    return (
        <div>
            <TopBar isAdmin={isAdmin}/>
            <Login/>
        </div>
    )
}

export default Main;