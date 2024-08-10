import React from 'react'
import Lottie from 'lottie-react';
import loading from '../../lotties/findlovers.json'

const FindUser = () => {
    return (
        <div style={{ width: '200px'}} className='flex items-center justify-center'>
          <Lottie
            animationData={loading}
            className="flex justify-center items-center"
            loop={true}
          />
        </div>
      );
}

export default FindUser