import React, { Component } from 'react';

import './PrivacyPolicy.scss';
import { seo } from '../../functions/useDocumentTitle';
import { Header, PrivacyBody } from './container';

export default class PrivacyPolicy extends Component {

  componentDidMount() {
    seo({
      title: 'Privacy Policy - Das Engeneering'
    })
  }
  
  render() {
    return (
      <div className="privacy-main-container">
        <Header />
        <PrivacyBody />
      </div>
    )
  }
}
