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
            <p className='p-description'>
                Our company specializes in providing top-quality construction equipment for rent. We have a wide 
                range of equipment available, including excavators, bulldozers, backhoes, skid steers, and more. 
                All of our equipment is well-maintained and regularly inspected to ensure it is in excellent working 
                condition.
            </p>

            <p className='p-description'>
                Our team of experienced professionals is available to help you choose the right equipment for your 
                project, and we offer flexible rental terms to meet your needs. Whether you need equipment for a 
                short-term project or a long-term contract, we have a solution for you.
            </p>

            <p className='p-description'>
                Contact us today to learn more about our construction equipment rental services and to request a 
                quote. We look forward to helping you get the job done efficiently and effectively.
            </p>

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