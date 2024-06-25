import React from 'react'
import loading from '../../lotties/languageToggle.json'
import Lottie from 'lottie-react'

const LanguageAnimation = () => {
  return (
    <div style={{ width: '300px'}} className='flex items-center justify-center'>
        <Lottie
        animationData={loading}
        className="flex justify-center items-center"
        loop={true}
        />
  </div>
  )
}

export default LanguageAnimation