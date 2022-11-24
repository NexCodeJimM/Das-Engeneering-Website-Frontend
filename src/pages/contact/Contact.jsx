import React from 'react';

import './Contact.scss';

import { Header, ContactFormContainer } from './container';

const Contact = () => {
  return (
    <div className="contact-main-container">
      <Header />
      <ContactFormContainer />
    </div>
  )
}

export default Contact;