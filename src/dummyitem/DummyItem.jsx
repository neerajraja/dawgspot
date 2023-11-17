/*
    This item is a placeholder for the real item components.
    I am using it to complete the home page while the real item component is being finished.
    -Nathan
*/

import React from 'react';
import './DummyItem.css';

function DummyItem(props) {
    return (
        <div className="generic-container">
            <h1>{`Game ${props.gamenumber}`}</h1>
            <h2>{`${props.hometeam} vs ${props.awayteam}`}</h2>
            <p>{`${props.homescore} - ${props.awayscore}`}</p>

            <span className="game-button-container">
                <a href="./." className="game-button">View Comments</a>
                { props.isAdmin 
                  ? <>
                        <a href="./." className="game-button">Edit Game</a>
                        <a href="./." className="game-button">Delete Game</a>
                    </>
                  : <></> // Render these buttons if the user isAdmin
                }
            </span>
        </div>
    )
}

export default DummyItem;