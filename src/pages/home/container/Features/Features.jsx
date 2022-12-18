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
          {/* PM */}
          <ServiceCard 
            icon={<AiOutlineProject />} 
            title="Project Management"
            description="Project Management specialists oversee construction projects to ensure they are completed 
            on time and within budget. They work with clients, contractors, and other stakeholders and have strong 
            communication, problem-solving, and organizational skills."
          />
          {/* Equipment Rental */}
          <ServiceCard 
            icon={<TbBackhoe />} 
            title="Machinery & Equipment Rental"
            description="Our company specializes in providing top-quality construction equipment for rent. We 
            have a wide range of equipment available and offer flexible rental terms to meet your needs. Contact us 
            today to learn more about our services and to request a quote."
          />
          {/* CB */}
          <ServiceCard 
            icon={<MdOutlineRealEstateAgent />} 
            title="Commercial Brokers"
            description="Commercial real estate brokers help businesses and investors buy, sell, and lease commercial 
            properties. They work with clients to understand their needs, conduct market research, and negotiate sales 
            and lease agreements."
          />
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