import React from 'react';

import './Header.scss';
import { images } from '../../../../constants';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="app__main-header">

        <motion.div 
            className="app__header-caption"
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            >
            <h1 className="title">By Wisdom, We Build!</h1>
            <p>We are an organization that believes in delivering customer execellence, unparalleled 
            service and product delivery. We specialize in Project Management Solutions, Heavy & Light Machinery, Equipment Rental and other construction
            related projects....</p>
        
            <div className='app__buttons'>

              <div className="app__button-submit">
                <Link to="/about">
                  <button className='app__read-more'>Read More</button>
                </Link>

                <Link to="/contact">
                  <button className='app__contact-btn'>Contact Us</button>
                </Link>
              </div>
            </div>
        </motion.div>

        <motion.div 
            className="app__header-image"
            
        >
            <img src={ images.meeting } alt="header" />
        </motion.div>

    </div>
  )
}

export default Header