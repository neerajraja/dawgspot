import React from 'react';
import ExpandCard from '../expandCard/expandCard';
import './CardList.css';

function CardList(props) {
    return (
        <div>
        {
            props.items.map((item, idx) => {
                return(
                    <ExpandCard
                        id={item._id}
                        hometeam={item.homeTeam}
                        awayteam={item.awayTeam}
                        homerank={item.homeRank}
                        awayrank={item.awayRank}
                        homeodds={item.homeOdds}
                        gameImage={item.gameImage}
                    />
                )
            })         
        }
        </div>
    )
}

export default CardList;