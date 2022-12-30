import React from 'react';
import { motion } from 'framer-motion';
import './Card.scss';

const Cards = ({title, img, description}) => {
  return (
    <div className="shape__container">
      <motion.div 
        className="shape"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.25, ease: 'easeInOut'}}
      >
        <div className="card__picture">
          <img src={img} alt='features' />
        </div>

        <div className="card__text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </motion.div>

      <div className="shape__shadow" />

    </div>
  )
}

export default Cards