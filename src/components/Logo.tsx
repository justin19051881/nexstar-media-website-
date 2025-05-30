import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="flex items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-heading font-bold text-xl md:text-2xl flex items-center">
        <motion.span 
          className="text-[#FF0000]"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          NEX
        </motion.span>
        <motion.span 
          className="text-[#000000]"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          STAR
        </motion.span>
        <motion.span 
          className="text-gray-800 text-sm ml-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          MEDIA
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Logo;