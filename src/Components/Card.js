import React, { useState } from 'react'
import "./Card.css"
import ReactCardFlip from 'react-card-flip';

const Card = ({ title, description, icon, onClick }) => {
  const [isFlipped,setIsFlipped]=useState(false);

  const flipcard=()=>{
    setIsFlipped(!isFlipped);
  }
    return (
      <div>
        <ReactCardFlip  flipSpeedBackToFront={0.8} flipSpeedFrontToBack={0.8} flipDirection='horizontal' isFlipped={isFlipped}>   
         <div className="card" onClick={flipcard}>
        <div className="card-icon">{icon}</div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <button className="card-button">Learn More</button>
      </div>
      <div className="card " onClick={flipcard}>
        <div className=" card-icon ">{icon}</div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <button className="card-button">Learn More</button>
      </div>
      </ReactCardFlip>
 
      </div>
    );
  };

export default Card