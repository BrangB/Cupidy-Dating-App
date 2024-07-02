import React from 'react'
import { motion } from 'framer-motion';

const Category = ({children}) => {
    return (
        <motion.div 
          initial={{ x: '-300px', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 2 }}
          className='fade-card'
        >
          {children}
        </motion.div>
      );
}

export default Category