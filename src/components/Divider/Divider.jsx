import React from 'react';

import { images } from '../../constants'
import './Divider.scss';

const Divider = () => {
  return (
    <div className="divider-main-container">
        <div className='app__header-line-left' />
        <img src={images.dividerIcon} alt="icon" />
        <div className='app__header-line-right' />
    </div>
  )
}

export default Divider;