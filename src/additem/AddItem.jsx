import React, { useState } from 'react';
import './AddItem.css';

function AddItem() {
    const [homeTeam, setHomeTeam] = useState('');
    const [awayTeam, setAwayTeam] = useState('');
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [gameImage, setGameImage] = useState('');

    const homeTeamChangeHandler = event => setHomeTeam(event.target.value);
    const awayTeamChangeHandler = event => setAwayTeam(event.target.value);
    const homeScoreChangeHandler = event => setHomeScore(event.target.value);
    const awayScoreChangeHandler = event => setAwayScore(event.target.value);
    const gameImageChangeHandler = event => setGameImage(event.target.value);

    function submitHandler(event) {
        event.preventDefault();

        const gameData = {
            id: Math.random().toString(),
            homeTeam: homeTeam,
            awayTeam: awayTeam,
            homeScore: homeScore,
            awayScore: awayScore,
            gameImage: gameImage
        };

        console.log(gameData);

        setHomeTeam('');
        setAwayTeam('');
        setHomeScore(0);
        setAwayScore(0);
        setGameImage('');
    }

    return(
        <div className="container" id="additem-container">
            <h1 className="additem-header">Add New Game</h1>
            <form className="additem-form" onSubmit={submitHandler}>
                <input type="text" id="additem-hometeam" placeholder="Home Team name.." value={homeTeam} onChange={homeTeamChangeHandler}/>
                <input type="text" id="additem-awayteam" placeholder="Away Team name.." value={awayTeam} onChange={awayTeamChangeHandler}/>
                <input type="number" id="additem-homescore" placeholder="Home Team score.." value={homeScore} onChange={homeScoreChangeHandler}/>
                <input type="number" id="additem-awayscore" placeholder="Away Team score.." value={awayScore} onChange={awayScoreChangeHandler}/>
                <input type="text" id="additem-gameimage" placeholder="URL to game image.." value={gameImage} onChange={gameImageChangeHandler}/>
                <button className="generic-button" type="submit" id="additem-button">Add Item</button>
            </form>
        </div>
    );
}

export default AddItem;