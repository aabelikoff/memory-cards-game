import React from 'react';
import '../styles/card.css';

function Card(props) {
  const handleOnClick = (e) => {
    props.onCardClick();
  };

  return (
    <div className="card" id={props.id} onClick={handleOnClick}>
      <img src={props.url} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}

export default Card;
