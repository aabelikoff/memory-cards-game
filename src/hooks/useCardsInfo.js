import React, { useState } from 'react';
import Image_53972 from '../images/Minion Clipart 53972.jpg';
import Image_53983 from '../images/Minion Clipart 53983.jpeg';
import Image_53990 from '../images/Minion Clipart 53990.jpg';
import Image_54028 from '../images/Minion Clipart 54028.jpg';
import Image_54040 from '../images/Minion Clipart 54040.png';
import Image_54043 from '../images/Minion Clipart 54043.jpg';
import Image_54058 from '../images/Minion Clipart 54058.jpg';
import Image_54080 from '../images/Minion Clipart 54080.png';
import Image_54081 from '../images/Minion Clipart 54081.jpg';
import Image_54089 from '../images/Minion Clipart 54089.jpg';
import Image_54123 from '../images/Minion Clipart 54123.jpg';
import Image_54132 from '../images/Minion Clipart 54132.png';
import Image_54139 from '../images/Minion Clipart 54139.jpg';

export default function useCardInfo() {
  const [cards, setCards] = useState([
    {
      id: 0,
      url: Image_53972,
      name: '0',
    },
    {
      id: 1,
      url: Image_53983,
      name: '1',
    },
    {
      id: 2,
      url: Image_53990,
      name: '2',
    },
    {
      id: 3,
      url: Image_54028,
      name: '3',
    },
    {
      id: 4,
      url: Image_54040,
      name: '4',
    },
    {
      id: 5,
      url: Image_54043,
      name: '5',
    },
    {
      id: 6,
      url: Image_54139,
      name: '6',
    },
    {
      id: 7,
      url: Image_54080,
      name: '7',
    },
    {
      id: 8,
      url: Image_54081,
      name: '8',
    },
    {
      id: 9,
      url: Image_54089,
      name: '9',
    },
    {
      id: 10,
      url: Image_54123,
      name: '10',
    },
    {
      id: 11,
      url: Image_54132,
      name: '11',
    },
  ]);

  // const [cards, setCards] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const shuffle = () => {
    console.log('Shuffle');
    let copy = Object.assign([], cards);
    for (let i = copy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    setCards(copy);
  };

  return [cards, shuffle];
}
