import React from 'react';
import { motion } from 'framer-motion';

const FadeCard = ({ children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', duration: 3 }}
      className='fade-card'
    >
      {children}
    </motion.div>
  );
};

export default FadeCard;
