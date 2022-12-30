import React from 'react';

import './WhyDas.scss';

import { Features } from './container';
import { Divider } from '../../../../components';
import { motion } from 'framer-motion';

const WhyDas = () => {
  return (
    <div className='why-main-container'>
      <div className="why-inner-container">
        <div className="why-section-title">
          <div className="why-title-header">
            <h1>Why <span>DAS Engeneering</span>?</h1>
          </div>

          <Divider />
        </div>

        <motion.div 
          className="why__description"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.25, ease: 'easeInOut'}}
        >
          <p>Welcome to Das Engeneering! We are a full-service construction company that is dedicated to delivering the highest quality work and customer satisfaction. Our team of skilled professionals has years of experience in the industry and the expertise to handle any project, big or small.</p>
          <br />
          <p>At Das Engeneering, we offer a wide range of services, including equipment rental, construction, and project management, all under one roof. This allows us to streamline the process and ensure that your project stays on track and on budget. We also prioritize safety and sustainability, using the latest technology and techniques to ensure that all of our projects are completed safely and in an environmentally-friendly manner.</p>
        </motion.div>
      

        <div className="why-content">
          <Features />
        </div>
      </div>
    </div>
  )
}

export default WhyDas;