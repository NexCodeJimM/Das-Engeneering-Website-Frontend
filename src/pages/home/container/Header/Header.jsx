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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum id ante eget pulvinar. Nam iaculis leo nec urna finibus interdum. In hendrerit felis eros, id varius lorem rhoncus a. Aliquam erat volutpat. Vivamus nec neque elementum, pellentesque diam ac, tempus felis. Sed id aliquet libero, sed tincidunt mauris. Donec lobortis pretium porttitor. Nulla sollicitudin finibus ante vitae eleifend. Maecenas sed nunc a odio ultricies rutrum sit amet eu enim. Etiam eget suscipit lectus. Morbi eu tellus vitae leo auctor tempus ac ut sapien. Cras a suscipit urna. Etiam nec leo eros. Nam ultrices eu ante tincidunt lacinia.

</p>
        
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
            <img src={ images.meeting } alt="header-image" />
        </motion.div>

    </div>
  )
}

export default Header