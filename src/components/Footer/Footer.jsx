import React from 'react';

import './Footer.scss';

import { images } from '../../constants'
import { SocialLinks } from '../'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="app__footer-main">
      <div className="footerLogo">
        <img src={images.footerLogo} alt='Logo'/>

        <div className='social-links'>
          <SocialLinks 
            icon={<FaFacebookF />}
            target='_blank'
            link='https://facebook.com'
          />

          <SocialLinks 
            icon={<FaTwitter />}
            target='_blank'
            link='https://twitter.com'
          />

          <SocialLinks 
            icon={<FaInstagram />}
            target='_blank'
            link='https://instagram.com'
          />
        </div>
      </div>

      <div className="footer-services">
        <div className="footer-services-title">
          <h2>Services</h2>
          <div className="divider" />
        </div>

        <div className="footer-services-list">
          <ul className="services-links">
              <li>
                <Link to='/about'>
                  Project Management
                </Link>
              </li>

              <li>
                <Link to='/about'>
                  Heavy & Light Machinery & Equipment Rental
                </Link>
              </li>

              <li>
                <Link to='/about'>
                  Commercial Brokers
                </Link>
              </li>
          </ul>
        </div>
      </div>

      <div className="footer-services">
        <div className="footer-services-title">
          <h2>Company</h2>
          <div className="divider" />
        </div>

        <div className="footer-services-list">
          <ul className="services-links">
              <li>
                <Link to='/about'>
                  About Us
                </Link>
              </li>

              <li>
                <Link to='/services'>
                  Services
                </Link>
              </li>

              <li>
                <Link to='/projects'>
                  Projects
                </Link>
              </li>

              <li>
                <Link to='/contact'>
                  Contact Us
                </Link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer