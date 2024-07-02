import React from 'react';
import Category from '../../../animations/collectdata/Category';

const Music = () => {

  const musicInterests = [
    'Rock',
    'Pop',
    'Jazz',
    'Classical',
    'Hip-Hop',
    'Country',
    'Electronic'
  ];

  return (
    <Category>
      <div className="interests flex gap-3 flex-wrap items-center justify-center">
        {musicInterests.map((interest, index) => (
          <span key={index} className='p-2 px-4 bg-colorbg-secondary rounded-lg hover:bg-btnbg-primary hover:text-colortext-third cursor-grab duration-200'>{interest}</span>
        ))}
      </div>
    </Category>
  );
}

export default Music;
