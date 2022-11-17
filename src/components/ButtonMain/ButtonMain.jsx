import React from 'react'

import { Link } from 'react-router-dom';

import './ButtonMain.scss'

const ButtonMain = ({title, link, icon}) => {
  return (
    <div className='main-btn'>
      <Link to={link}>
        <p>{title} <span>{icon}</span></p>
      </Link>
    </div>
  )
}

export default ButtonMain