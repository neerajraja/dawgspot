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
                        gamenumber={idx + 1}
                        hometeam={item.hometeam}
                        awayteam={item.awayteam}
                        homerank={item.homerank}
                        awayrank={item.awayrank}
                        homeodds={item.homeodds}
                        isAdmin={props.isAdmin}
                    />
                )
            })         
        }
        </div>
    )
}

export default CardList;