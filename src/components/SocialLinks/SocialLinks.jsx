import React from 'react';

import './SocialLinks.scss';


const SocialLinks = ({icon, link, target}) => {
  return (
    <a href={link} target={target}>
        <div className="container">

            <div className="icon">
                {icon}
            </div>

        </div>

    </a>
  )
}

export default SocialLinks