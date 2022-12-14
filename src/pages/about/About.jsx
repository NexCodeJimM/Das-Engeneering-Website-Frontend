import React, { Component } from 'react';

import './About.scss';

import { Header, WhyUs, Vision, CoreValues } from './container';
import { seo } from '../../functions/useDocumentTitle';

export default class About extends Component {

  componentDidMount() {
    seo({
      title: 'About Us - Das Engeneering',
      metaDescription: 'DAS Engineering is an organization that believes in delivering customer execellence, unparalleled service and product delivery. We pride ourselves as a leading brand that our customers trust and partner with for all their equipment requirements and other project needs.'
    })
  }

  render() {
    return (
      <div className="main-container">
        <Header />
        <WhyUs />
        <Vision />
        <CoreValues />
  
      </div>
    )
  }
}