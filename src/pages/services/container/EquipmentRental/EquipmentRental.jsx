import React from 'react';

import './EquipmentRental.scss';

const EquipmentRental = () => {
  return (
    <div className='er-main-container'>
        <div className="er-header">
            <div className="er-header-img-container"/>

            <div className="er-title">
                <h2>Heavy & Light Machinery & Equipment Rental</h2>
                <div className="divider" />
            </div>
        </div>

        <div className="er-body-content">
            <p>Below are the list of services we offer:</p>

            <ul>
                <li>Light Equipment.</li>
                <li>Heavy Equipment.</li>
                <li>Generator Set & Industrial Motors.</li>
                <li>Installation & Commissioning.</li>
                <li>Maintenance of Annual Contract.</li>
                <li>Construction of Equipment.</li>
            </ul>
        </div>
    </div>
  )
}

export default EquipmentRental;