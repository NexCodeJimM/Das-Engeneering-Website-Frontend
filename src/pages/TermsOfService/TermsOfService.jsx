import React, { Component } from 'react';
import { seo } from '../../functions/useDocumentTitle';

import { Header, TermsBody } from './container';

import './TermsOfService.scss';

export default class TermsOfService extends Component {

  componentDidMount() {
    seo({
      title: 'Terms of Service - Das Engeneering'
    })
  }

  render() {
    return (
      <div className="terms-main-container">
        <Header />
        <TermsBody />
      </div>
    )
  }
}