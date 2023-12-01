import React, { useEffect, useState } from 'react';
import './gameCard.css';

function GameCard(props){
  const [token, setToken] = useState();

  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
      setShowComments(!showComments);
      props.clicker();
  }

  useEffect(() => {
    setToken(localStorage.getItem('auth-token'));
  }, []);


  return (
    <div className="card-container">
        <div className="card">
            <div className="half">
                <div className="content team-names">
                    <div className="rankings">{props.homeRank}</div>
                    <div>{props.homeTeam}</div>
                </div>
                <div className="content team-names">
                    <div className="rankings">{props.awayRank}</div>
                    <div>{props.awayTeam}</div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="half">
                <div className="content betting-odds">UGA odds</div>
                <div className="content bold betting-odds">{props.homeOdds}</div>
            </div>
            <div className="divider"></div>
            <div className="half">
                <div className="gameimage-container">
                    <img className="gameimage" src={props.gameImage} alt="A college football logo."></img>
                </div>
            </div>
            <div className="divider"></div>
            <div className="half">
                <div className="button-container">
                    <button className="gc-button" onClick={toggleComments}>See Comments</button>
                    { token
                      ? <>
                          <button className="gc-button">Manage Game</button>
                        </>
                      : <></>
                    }
                </div>
            </div>
        </div>
    </div>
    );
};

export default GameCard;
