import React from 'react';
import DummyItemList from '../dummyitemlist/DummyItemList';
import './HomePage.css';

// Dummy info for each game/item component
const items = [
    { hometeam: "Bengals", awayteam: "Ravens", homescore: "20", awayscore: "34"},
    { hometeam: "Jets", awayteam: "Raiders", homescore: "12", awayscore: "16"},
    { hometeam: "Giants", awayteam: "Cowboys", homescore: "17", awayscore: "49"},
];

function HomePage(props) {
    return (
        <div>
            <div id="banner">
                <div id="background-image"></div>
                <div id="content">
                    <p>Welcome to Dawgspot</p>
                </div>
            </div>

            <h1 className="section-header">Live Sports Games</h1>
            <DummyItemList items={items} isAdmin={props.isAdmin}/>
        </div>
    )
}

export default HomePage;