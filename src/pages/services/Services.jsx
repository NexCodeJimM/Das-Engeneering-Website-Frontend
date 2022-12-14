import React from 'react';

import './Services.scss';

import { Header } from './container';
import { ServicesTabs } from '../../components';
import { Component } from 'react';
import { seo } from '../../functions/useDocumentTitle';

export default class Services extends Component {

  componentDidMount() {
    seo({
      title: 'Our Services - Das Engeneering',
      metaDescription: 'We offer services such as Project management, Equipment Rental, and Commercial Brokers.'
    })
  }

  render() {
    return (
      <div className="services-main-container">
        <Header />
        <ServicesTabs />
      </div>
    )
  }
}

