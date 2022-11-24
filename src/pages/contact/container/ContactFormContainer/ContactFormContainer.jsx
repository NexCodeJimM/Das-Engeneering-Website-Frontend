import React from 'react';

import './ContactFormContainer.scss';

import { ContactForm } from '../../../../components';
import { MdEmail } from 'react-icons/md';
import { ImOffice } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
 
const ContactFormContainer = () => {
  return (
    <div className='cf-main-container'>

      <div className="information-section">
        <div className="information-title">
          <h1>Our Information</h1>
        </div>

        <div className="information-details">
          <p><span><MdEmail className='icons' /> Email Address:</span> info@dasengeneering.com</p>
          <p><span><BsFillTelephoneFill className='icons' /> Telephone #:</span> +971 45 577 973</p>
          <p><span><ImOffice /> Office Address:</span></p>
          <p>Office 3101-RL 58 Prime Tower, Business Bay, Dubai, United Arab Emirates P.O Box - 112037</p>
        </div>
      </div>

      <ContactForm />
    </div>
  )
}

export default ContactFormContainer;