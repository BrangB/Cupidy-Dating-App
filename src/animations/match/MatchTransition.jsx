import React from 'react'
import { motion } from 'framer-motion'

const MatchTransition = ({children}) => {
    return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 2 }}
          className='w-full flex items-center justify-center'
        >
          {children}
        </motion.div>
    )
}

export default MatchTransition