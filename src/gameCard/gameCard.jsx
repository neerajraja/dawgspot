import React from 'react';
import { useState } from 'react';
import './gameCard.css';

function GameCard(props){
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
      setShowComments(!showComments);
      props.clicker();
  }


  return (
    <div className="card-container">
        <div className="card">
            <div className="half">
                <div className="content team-names">
                    <div className="rankings">1</div>
                    <div>Georgia</div>
                </div>
                <div className="content team-names">
                    <div className="rankings">17</div>
                    <div>Vanderbuilt</div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="half">
                <div className="content betting-odds">UGA odds</div>
                <div className="content bold betting-odds">2.5</div>
            </div>
            <div className="divider"></div>
            <div className="half">
                <div className="button-container">
                    <button className="button" onClick={toggleComments}>See Comments</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default GameCard;
