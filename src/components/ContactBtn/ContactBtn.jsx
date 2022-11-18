import React from 'react';

import './ContactBtn.scss';

import { Link } from 'react-router-dom'

const ContactBtn = ({title, icon, link}) => {
  return (
    <Link to={link}>
        <div className="button-main-container">
            <h2>{title}</h2>
            <span>{icon}</span>
        </div>
    </Link>
  )
}

export default ContactBtn