import React from 'react';
import { motion } from 'framer-motion';

const FadeCard = ({ children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', duration: 2 }}
      className='fade-card w-full flex items-center justify-center flex-col'
    >
      {children}
    </motion.div>
  );
};

export default FadeCard;
