import React from 'react';

import './CallToAction.scss';

import { ContactBtn } from '../../../../components';
import { BsFileEarmarkText } from 'react-icons/bs'

const CallToAction = () => {
  return (
    <div className="app__main-cta-container">

      <div className="app__cta-section-title">
        <h4>You like what you see? </h4>
        <h1>Get a Quote Now!</h1>
      </div>

      <div className="app__cta-button">
        <ContactBtn
          title="Contact Us"
          icon={<BsFileEarmarkText />}
          link="/contact"
        />
      </div>
    </div>
  )
}

export default CallToAction