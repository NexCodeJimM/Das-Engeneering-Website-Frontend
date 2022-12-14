import React from 'react';

import './Features.scss';

import { motion } from 'framer-motion';
import { ServiceCard, ButtonMain, Divider } from '../../../../components';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { AiOutlineProject } from 'react-icons/ai';
import { TbBackhoe } from 'react-icons/tb';
import { MdOutlineRealEstateAgent } from 'react-icons/md';

const Features = () => {
  return (
    <>
      <div className="features-main-container">
          {/* Section Header */}
        <motion.div className='app__section-title'>
          <div className="title-header">
            <h1>Our <span>Services</span></h1>
          </div>

          <Divider />
        </motion.div>

        <motion.div 
          className='app__cards'
        >
          <ServiceCard icon={<AiOutlineProject />} title="Project Management"/>
          <ServiceCard icon={<TbBackhoe />} title="Machinery & Equipment Rental"/>
          <ServiceCard icon={<MdOutlineRealEstateAgent />} title="Commercial Brokers"/>
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

      </div>
    </>
  )
}

export default Features