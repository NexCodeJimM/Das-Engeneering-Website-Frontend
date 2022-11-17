import React from 'react';

import './Features.scss';

import { motion } from 'framer-motion';
import { ServiceCard, ButtonMain } from '../../../../components';
import { images } from '../../../../constants';
import { BsArrowRightCircleFill } from 'react-icons/bs'

const Features = () => {
  return (
    <>

      {/* Section Header */}
      <motion.div className='app__section-title'>
        <div className="title-header">
          <h1>Our Services</h1>
        </div>

        <div className="divider">
          <div className='app__header-line-bold' />
          <div className='app__header-line-thin' />
        </div>
      </motion.div>

      <motion.div 
        className='app__cards'
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <ServiceCard icon={images.projectmanagement} title="Project Management"/>
        <ServiceCard icon={images.machinery} title="Heavy & Light Machinery & Equipment Rental"/>
        <ServiceCard icon={images.brookers} title="Commercial Brookers"/>
      </motion.div>
      
      <motion.div 
        className="app__button"
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <ButtonMain 
          title="Learn more about our services" 
          icon={<BsArrowRightCircleFill />}
          link="/services" 
        />
      </motion.div>

    </>
  )
}

export default Features