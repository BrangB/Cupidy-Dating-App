import React from 'react'
import loading from '../../lotties/languageToggle.json'
import Lottie from 'lottie-react'

const LanguageAnimation = () => {
  return (
    <div style={{ width: '300px'}} className='flex items-center justify-center'>
        {/* <Lottie
        animationData={loading}
        className="flex justify-center items-center"
        loop={true}
        /> */}
      <div className='text-2xl loading-image text-colortext-primary tracking-[6px] text-center'><span className='text-3xl'>C</span>hanging <span className='text-3xl'>L</span>anguage...</div>
  </div>
  )
}

export default LanguageAnimation