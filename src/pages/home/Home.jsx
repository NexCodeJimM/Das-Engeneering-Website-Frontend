import React, { Component } from 'react';

import './Home.scss';

import { Header, Features, CTA, WhyDas } from './container';
import { seo } from '../../functions/useDocumentTitle';

export default class Home extends Component {

  componentDidMount() {
    seo({
      title: 'By Wisdom, We Build! - Das Engeneering',
      metaDescription: 'We are an organization that believes in delivering customer execellence, unparalleled service and product delivery. We specialize in Project Management Solutions, Heavy & Light Machinery, Equipment Rental and other construction related projects'
    })
  }

  render() {
    return (
      <>
        <Header />
        <Features />
        <WhyDas />
        <CTA />
      </>
    )
  }
}
