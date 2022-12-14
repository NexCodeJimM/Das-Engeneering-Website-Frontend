import React from 'react';

import { images } from '../../constants';
import './DividerWhite.scss';

const DividerWhite = () => {
  return (
    <div className="divider-white-main-container">
        <div className="divider-white-line-left" />
        <img src={images.dividerIconWhite} alt="icon" />
        <div className="divider-white-line-right" />
    </div>
  )
}

export default DividerWhite;