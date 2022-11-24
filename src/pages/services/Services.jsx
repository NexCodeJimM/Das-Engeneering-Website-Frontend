import React from 'react';

import './Services.scss';

import { Header } from './container';
import { ServicesTabs } from '../../components';

const Services = () => {
  return (
    <div className="services-main-container">
      <Header />
      <ServicesTabs />
    </div>
  )
}

export default Services;