import React from 'react';

import './Header.scss';
import { Divider } from '../../../../components';

const Header = () => {
  return (
    <div className="terms-header-title">
        <h1>Terms of <span>Service</span></h1>
        <Divider />
    </div>
  )
}

export default Header