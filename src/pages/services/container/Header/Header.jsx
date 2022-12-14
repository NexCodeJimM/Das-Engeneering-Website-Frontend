import React from 'react';

import './Header.scss';

import { Divider } from '../../../../components';

const Header = () => {
  return (
    <div className="services-container-title">
        <h4>Curious on what we offer?</h4>
        <h1>Our <span>Services</span></h1>

        <Divider />
    </div>
  )
}

export default Header;