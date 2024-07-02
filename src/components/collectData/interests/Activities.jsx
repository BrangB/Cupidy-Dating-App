import React from 'react';
import Category from '../../../animations/collectdata/Category';

const Activities = () => {

  const activitiesInterests = [
    'Hiking',
    'Cycling',
    'Swimming',
    'Reading',
    'Traveling',
    'Cooking',
    'Gardening'
  ];

  return (
    <Category>
      <div className="interests flex gap-3 flex-wrap items-center justify-center">
        {activitiesInterests.map((interest, index) => (
          <span key={index} className='p-2 px-4 bg-colorbg-secondary rounded-lg hover:bg-btnbg-primary hover:text-colortext-third cursor-grab duration-200'>{interest}</span>
        ))}
      </div>
    </Category>
  );
}

export default Activities;
