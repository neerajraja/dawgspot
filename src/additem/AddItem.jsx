import React, { useState } from 'react';
import './AddItem.css';

function AddItem() {
    const [homeTeam, setHomeTeam] = useState('');
    const [awayTeam, setAwayTeam] = useState('');
    const [homeRank, setHomeRank] = useState('');
    const [awayRank, setAwayRank] = useState('');
    const [homeOdds, setHomeOdds] = useState('');
    const [gameImage, setGameImage] = useState('');

    const homeTeamChangeHandler = event => setHomeTeam(event.target.value);
    const awayTeamChangeHandler = event => setAwayTeam(event.target.value);
    const homeRankChangeHandler = event => setHomeRank(event.target.value);
    const awayRankChangeHandler = event => setAwayRank(event.target.value);
    const homeOddsChangeHandler = event => setHomeOdds(event.target.value);
    const gameImageChangeHandler = event => setGameImage(event.target.value);

    function submitHandler(event) {
        event.preventDefault();

        const gameData = {
            id: Math.random().toString(),
            homeTeam: homeTeam,
            awayTeam: awayTeam,
            homeRank: homeRank,
            awayRank: awayRank,
            homeOdds: homeOdds,
            gameImage: gameImage
        };

        console.log(gameData);

        setHomeTeam('');
        setAwayTeam('');
        setHomeRank('');
        setAwayRank('');
        setHomeOdds('');
        setGameImage('');
    }

    return(
        <div className="container" id="additem-container">
            <h1 className="additem-header">Add New Game</h1>
            <form className="additem-form" onSubmit={submitHandler}>
                <input type="text" id="additem-hometeam" placeholder="Home Team name.." value={homeTeam} onChange={homeTeamChangeHandler}/>
                <input type="text" id="additem-awayteam" placeholder="Away Team name.." value={awayTeam} onChange={awayTeamChangeHandler}/>
                <input type="text" id="additem-homerank" placeholder="Home Team rank.." value={homeRank} onChange={homeRankChangeHandler}/>
                <input type="text" id="additem-awayrank" placeholder="Away Team rank.." value={awayRank} onChange={awayRankChangeHandler}/>
                <input type="text" id="additem-homeodds" placeholder="Home Team odds.." value={homeOdds} onChange={homeOddsChangeHandler}/>
                <input type="text" id="additem-gameimage" placeholder="URL to game image.." value={gameImage} onChange={gameImageChangeHandler}/>
                <button className="generic-button" type="submit" id="additem-button">Add Item</button>
            </form>
        </div>
    );
}

export default AddItem;