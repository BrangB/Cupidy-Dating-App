import React from 'react'
import Lottie from 'lottie-react';
import welcome from '../../lotties/welcome.json'

const Welcomeinfo = () => {
    return (
        <div style={{ width: '300px'}} className='flex items-center justify-center'>
          <Lottie
            animationData={welcome}
            className="flex justify-center items-center"
            loop={true}
          />
        </div>
      );
}

export default Welcomeinfo