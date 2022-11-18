import React from 'react';

import './FAQ.scss';

import { motion } from 'framer-motion';
import { images } from '../../../../constants';
import { Accordion } from '../../../../components';

const FAQ = () => {
  return (
    <div className="app__faq-main-container">
      <div className="app__section-title">

        <div className="title-header">
          <h1>FAQ</h1>
        </div>

        <div className="divider">
          <div className='app__header-line-bold' />
          <div className='app__header-line-thin' />
        </div>

      </div>

      <div className="app__content-container">

        <div className="app__faq-image">
          <img src={images.thinking} alt="FAQ"/>
        </div>

        <div className="app__faq-list">
          <Accordion />
        </div>

      </div>

    </div>
  )
}

export default FAQ;