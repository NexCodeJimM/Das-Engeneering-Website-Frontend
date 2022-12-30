import React from 'react';

import './FullPageHeader.scss';

const FullPageHeader = ({ image }) => {
  return (
    <div className="fullPage__main__container">
        <img src={image} alt="header" />
    </div>
  )
}

export default FullPageHeader