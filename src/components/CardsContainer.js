import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/cardsContainer.css';
import useCardInfo from '../hooks/useCardsInfo';

function CardsContainer(props) {
  const [cards, shuffleCards] = useCardInfo();

  return (
    <div className="cards-container">
      {cards.map((card) => {
        return (
          <Card
            url={card.url}
            name={card.name}
            id={card.id}
            key={card.id}
            onCardClick={shuffleCards}
          />
        );
      })}
    </div>
  );
}

export default CardsContainer;
