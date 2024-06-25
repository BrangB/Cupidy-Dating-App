import React from 'react'
import { motion } from 'framer-motion'

const SlideLeftMotion = ({children}) => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
          <motion.div 
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100, }}
            className='  flex items-center justify-center rounded-2xl overflow-hidden'
          >
            {children}
          </motion.div>
        </div>
      )
      
}

export default SlideLeftMotion