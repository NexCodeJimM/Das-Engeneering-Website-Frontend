import React from 'react';

import './FeatureIcons.scss';

const FeatureIcons = ({ icon, title }) => {
  return (
    <div className="FI-main-container">
        {icon}

        <div className="FI-title">
            <p>{title}</p>
        </div>
    </div>
  )
}

export default FeatureIcons;