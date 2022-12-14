import React from 'react';

import './ServiceCard.scss';


const ServiceCard = ({icon, title, description}) => {
  return (
    <div className="main">
        <div className="card-icon">
            {icon}
        </div>

        <div className="card-title">
            <h4>{title}</h4>
        </div>

        <div className="card-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis orci ipsum. Duis risus risus, 
            tempor ac ligula a, accumsan mollis ante.
          </p>
        </div>
    </div>
  )
}

export default ServiceCard;