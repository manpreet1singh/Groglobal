import React from 'react'
import Card from './Card';
import { cards } from './Assets';
import "./Card.css"
const Cards = () => {
  return (
    <div className="cards-container">
    {cards.map((card) => (
      <Card
        key={card.id}
        title={card.title}
        description={card.description}
        icon={card.icon}
        learnMoreUrl={card.learnMoreUrl}
      />
    ))}
  </div>
  )
}

export default Cards