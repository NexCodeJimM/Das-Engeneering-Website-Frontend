import React from 'react';

import './CommercialBrookers.scss';

const CommercialBrookers = () => {
  return (
    <div className='cb-main-container' id='commercialbrokers'>
        <div className="cb-header">
            <div className="cb-header-img-container"/>

            <div className="cb-title">
                <h2>Commercial Brokers</h2>
                <div className="divider" />
            </div>
        </div>

        <div className="cb-body-content">
            <p className='p-description'>
                Commercial real estate brokers help businesses and investors buy, sell, and lease commercial 
                properties. They work with clients to understand their needs, conduct market research, and negotiate 
                sales and lease agreements. A bachelor's degree in real estate or a related field is often preferred, 
                as is a state license. Strong communication, negotiation, and problem-solving skills are essential for 
                this role.
            </p>

            <p>Below are the list of services we offer:</p>

            <ul>
                <li>Networks.</li>
                <li>Retail and Wholesale Trades.</li>
                <li>Project Close Out.</li>
            </ul>
        </div>
    </div>
  )
}

export default CommercialBrookers;