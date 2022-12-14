import React from 'react';

import './Header.scss';

import { Divider } from '../../../../components';

const Header = () => {
  return (
    <div className="quote-container-title">
        <h4>Want to hire us?</h4>
        <h1>Get a <span>Qoutation</span></h1>

        <Divider />
    </div>
  )
}

export default Header;