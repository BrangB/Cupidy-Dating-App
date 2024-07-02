import React from 'react'
import { motion } from 'framer-motion'

const SlideLeftMotion = ({children}) => {
    return (
          <motion.div 
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100, }}
            className='flex flex-col w-full relative h-full bg-primary-500 md:bg-primary-50 items-center justify-end md:justify-center overflow-hidden gap-12'
          >
            <div className="header uppercase flex md:hidden text-colortext-secondary font-bold text-[30px] flex-col items-center justify-center gap-8">
              <div className="logo bg-colorbg-secondary text-colortext-primary flex rounded-full w-[80px] h-[80px] items-center justify-center font-bold italic text-[60px]">C</div>
              <h1>Sign Up</h1>
            </div>
            {children}
          </motion.div>
      )
      
}

export default SlideLeftMotion