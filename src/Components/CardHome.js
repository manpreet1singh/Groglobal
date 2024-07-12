
import React from 'react';
import './CardHome.css';

const Card = ({ title, content, Icon }) => {
  return (
    <div className="card">
      {Icon && <Icon className="card-icon" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default Card;
