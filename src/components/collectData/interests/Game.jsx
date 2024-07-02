import React from 'react';
import Category from '../../../animations/collectdata/Category';

const Game = () => {

  const gameInterests = [
    'Action',
    'Adventure',
    'Puzzle',
    'RPG',
    'Simulation',
    'Strategy',
    'Sports'
  ];

  return (
    <Category>
      <div className="interests flex gap-3 flex-wrap items-center justify-center">
        {gameInterests.map((interest, index) => (
          <span key={index} className='p-2 px-4 bg-colorbg-secondary rounded-lg hover:bg-btnbg-primary hover:text-colortext-third cursor-grab duration-200'>{interest}</span>
        ))}
      </div>
    </Category>
  );
}

export default Game;
