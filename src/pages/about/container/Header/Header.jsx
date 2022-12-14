import React from 'react';

import './Header.scss';

import { Divider } from '../../../../components';

const Header = () => {
  return (
    <div className="container-title">
        <h4>Who are we?</h4>
        <h1>About <span>Us</span></h1>

        <Divider />
    </div>
  )
}

export default Header