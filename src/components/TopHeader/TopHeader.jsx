import React from 'react'

import './TopHeader.scss'
import { GiRotaryPhone } from 'react-icons/gi';

const TopHeader = () => {
  return (
    <div className="app__body">
        <GiRotaryPhone />
        <p>+971 45 577 973</p>
    </div>
  )
}

export default TopHeader