import React from 'react';

import './Vision.scss';

import { images } from '../../../../constants';

const Vision = () => {
  return (
    <div className='vision-main-container'>
      <div className="vision-inner-container">

       <div className="vision-desc">

        <div className="vision-title">
          <img src={images.vision} alt="vision"/>
          <h1>Our <span>Vision</span></h1>
        <div className='divider' />
        </div>

        <div className="vision-content">
          <h1>To be the most trusted and admired brand in every industry we operate in.</h1>
        </div>

       </div>

      </div>

      <div className="vision-img">
          <img src={images.visionimg} alt="vision..." />
       </div>
    </div>
  )
}

export default Vision