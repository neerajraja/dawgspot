import React from "react";
import { useState, useRef } from "react";
import "./expandCard.css"
import GameCard from "../gameCard/gameCard";

function ExpandCard() {
    const [open,setOpen] = useState(false);
    const lowerRef = useRef(null);
    const containerRef = useRef(null);
    const scrollToExpandedContent = () => {
      const cardPosition = lowerRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: cardPosition, behavior: 'smooth' });
  };
    const handleClick = () => {
        console.log('Click event triggered');
        if (open) {
            console.log('Collapsing: setting height to 200');
            lowerRef.current.style.height = '200px';
        } else {
            const scrollHeight = lowerRef.current.scrollHeight;
            console.log(`Expanding: setting height to ${scrollHeight}px`);
            lowerRef.current.style.height = `${scrollHeight}px`;
            setTimeout(scrollToExpandedContent, 200); 
        }
        setOpen(!open);
    };

        return (
          <div
            className={"container " } ref={lowerRef}
          >
            <div className="upper">
                <GameCard clicker={handleClick}/>
            </div>
            <div className="lower">
              <p>John Doe</p>
              <h3>
                God I hate that other team!!! Go our team !!!!
              </h3>
              <p>Jane smith</p>
              <h3>
                Go team!!!
              </h3>
    
              <h4>Add a comment</h4>
            <input type="text" />
            <button type="submit" className="button">Submit</button>


            </div>


            
          </div>
        );
}

export default ExpandCard;




  