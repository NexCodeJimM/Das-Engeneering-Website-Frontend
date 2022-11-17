import React from 'react';

import './ServiceCard.scss'

const ServiceCard = ({icon, title}) => {
  return (
    <div className="main">
        <div className="card-icon">
            <img src={icon} alt={title}/>
        </div>

        <div className="card-title">
            <p>{title}</p>
        </div>
    </div>
  )
}

export default ServiceCard;