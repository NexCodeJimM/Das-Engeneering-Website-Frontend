import React, { Component } from 'react';

import './Contact.scss';

import { Header, ContactFormContainer } from './container';
import { seo } from '../../functions/useDocumentTitle';

export default class Contact extends Component {
  
  componentDidMount() {
    seo({
      title: 'Contact Us - Das Engeneering',
      metaDescription: 'Do you have any questions or clarifications? You can send us an email by completing the form!'
    })
  }

  render() {
    return (
      <div className="contact-main-container">
        <Header />
        <ContactFormContainer />
      </div>
    )
  }
}
