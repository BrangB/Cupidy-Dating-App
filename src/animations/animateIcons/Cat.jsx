import React from 'react'
import Lottie from 'lottie-react';
import cat from '../../lotties/cat.json'

const Cat = () => {
    return (
        <div className='w-[170px] md:w-[200px] flex items-center justify-center absolute -bottom-9 right-5 md:right-32'>
          <Lottie
            animationData={cat}
            className="flex justify-center items-center"
            loop={true}
          />
        </div>
      );
}

export default Cat