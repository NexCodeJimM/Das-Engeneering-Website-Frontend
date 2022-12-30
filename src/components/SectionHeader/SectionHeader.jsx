import React from 'react';
import  Divider  from '../Divider/Divider';
import { motion } from 'framer-motion';

import './SectionHeader.scss';

const SectionHeader = ({ text1, text2}) => {
  return (
    <motion.div 
      className="SH__main__container"
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.25, ease: 'easeInOut'}}
    >
        <h1>{text1} <span>{text2}</span></h1>

        <Divider />
    </motion.div>
  )
}

export default SectionHeader