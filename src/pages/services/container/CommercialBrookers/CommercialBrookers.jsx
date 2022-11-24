import React from 'react';

import './CommercialBrookers.scss';

const CommercialBrookers = () => {
  return (
    <div className='cb-main-container'>
        <div className="cb-header">
            <div className="cb-header-img-container"/>

            <div className="cb-title">
                <h2>Commercial Brokers</h2>
                <div className="divider" />
            </div>
        </div>

        <div className="cb-body-content">
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