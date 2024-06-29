import React from 'react'
import Lottie from 'lottie-react';
import cat from '../../lotties/cat.json'

const Cat = () => {
    return (
        <div style={{ width: '200px'}} className='flex items-center justify-center absolute bottom-0 right-32'>
          <Lottie
            animationData={cat}
            className="flex justify-center items-center"
            loop={true}
          />
        </div>
      );
}

export default Cat