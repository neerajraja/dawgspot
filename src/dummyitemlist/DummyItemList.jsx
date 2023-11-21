import React from 'react';
import DummyItem from '../dummyitem/DummyItem';
import './DummyItemList.css';

function DummyItemList(props) {
    return (
        <div>
        {
            props.items.map((item, idx) => {
                return(
                    <DummyItem
                        gamenumber={idx + 1}
                        hometeam={item.hometeam}
                        awayteam={item.awayteam}
                        homescore={item.homescore}
                        awayscore={item.awayscore}
                        isAdmin={props.isAdmin}
                    />
                )
            })         
        }
        </div>
    )
}

export default DummyItemList;