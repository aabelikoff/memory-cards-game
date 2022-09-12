import React, { useState, useEffect } from 'react';
import './App.css';
import CardsContainer from './components/CardsContainer';
import Score from './components/Score';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    console.log('Use effect!');
    const appElement = document.querySelector('.App');

    const selectCard = (e) => {
      if (e.target.className !== 'card') {
        return;
      }
      if (selectedCards.find((elem) => elem === e.target.id)) {
        setSelectedCards([]);
      } else {
        let copy = Object.assign([], selectedCards);
        copy.push(e.target.id);
        setSelectedCards(copy);
      }
    };

    appElement.addEventListener('click', selectCard);

    return () => {
      appElement.removeEventListener('click', selectCard);
    };
  }, [selectedCards]);

  return (
    <div className="App">
      <header>
        <div className="app-name">Memory Card Game</div>
        <Score score={selectedCards.length} />
      </header>
      <CardsContainer />
    </div>
  );
}

export default App;
