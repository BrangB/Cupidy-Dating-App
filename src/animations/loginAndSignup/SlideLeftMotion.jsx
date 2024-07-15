import React from 'react'
import { motion } from 'framer-motion'

const SlideLeftMotion = ({children}) => {
    return (
          <motion.div 
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100, }}
            className='flex flex-col w-full relative h-full items-center justify-center overflow-hidden gap-12'
          >
            {children}
          </motion.div>
      )
      
}

export default SlideLeftMotion