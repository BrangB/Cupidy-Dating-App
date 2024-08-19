import React from 'react'
import Lottie from 'lottie-react';
import arrow from '../../lotties/dashboardLoading.json'

const PaperArrow = () => {
    return (
        <div className='w-[140px] md:w-[500px] flex items-center justify-center'>
          <Lottie
            animationData={arrow}
            className="flex justify-center items-center"
            loop={true}
          />
        </div>
      );
}

export default PaperArrow