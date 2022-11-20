import React from 'react';

import './About.scss';

import { Header, WhyUs, Vision, CoreValues } from './container';

const About = () => {
  return (
    <div className="main-container">

      <Header />
      <WhyUs />
      <Vision />
      <CoreValues />

    </div>
  )
}

export default About;