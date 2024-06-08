import React from 'react'
import "./Card.css"

const Card = ({ title, description, icon, onClick }) => {
    return (
      <div className="card" onClick={onClick}>
        <div className="card-icon">{icon}</div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <button className="card-button">Learn More</button>
      </div>
    );
  };

export default Card