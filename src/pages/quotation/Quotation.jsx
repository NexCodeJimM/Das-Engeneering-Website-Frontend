import React, { Component } from 'react';

import './Qoutation.scss'

import { Header, FormContainer } from './container';
import { seo } from '../../functions/useDocumentTitle';

export default class Quotation extends Component {

  componentDidMount() {
    seo({
      title: 'Get a Quotation - Das Engeneering',
      metaDescription: 'Would you like to avail our services? Complete the form and we will email you back with the quotation that you requested as soon as possible!'
    })
  }

  render() {
    return (
      <div className='quote-main-container'>
        <Header />
        <FormContainer />
      </div>
    )
  }
}
