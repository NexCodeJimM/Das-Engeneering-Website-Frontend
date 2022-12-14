import React from 'react';

import './Header.scss';

import { Divider } from '../../../../components';

const Header = () => {
  return (
    <div className="contact-container-title">
        <h4>Want to get in touch?</h4>
        <h1>Contact <span>Us</span></h1>

        <Divider />
    </div>
  )
}

export default Header;