import React from 'react';

import './Header.scss';
import { Divider } from '../../../../components';

const Header = () => {
  return (
    <div className="privacy-header-title">
        <h1>Privacy <span>Policy</span></h1>
        <Divider />
    </div>
  )
}

export default Header;