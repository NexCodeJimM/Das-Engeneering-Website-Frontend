import React, { useState } from 'react';
import './Navbar.scss';

import { motion } from 'framer-motion';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { BiPaperPlane } from 'react-icons/bi';

import { Link, Route, Routes } from 'react-router-dom';
import { Home, About, Services, Projects, Contact, Quotation, quoteFormSubmitted, PageNotFound } from '../../pages';
import { images } from '../../constants';
import QuoteBtn from '../QuoteBtn/QuoteBtn';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <>

        <nav className='app__navbar'>

            {/* Logo */}
            <div className="app__navbar-logo">
              <Link to="/">
                <img src={images.logo} alt="Logo" />
              </Link>
            </div>

            {/* Navbar Links */}
            <ul className='app__navbar-links'>
                <li className='app__flex p-text'>
                  <Link to="/">Home</Link>
                  <div />
                </li>

                <li className='app__flex p-text'>
                  <Link to="/about">About Us</Link>
                  <div />
                </li>
                <li className='app__flex p-text'>
                  <Link to="/services">Services</Link>
                  <div />
                </li>
                <li className='app__flex p-text'>
                  <Link to="/projects">Projects</Link>
                  <div />
                </li>
            </ul>
              
            <div className='app__nav-btn'>
              <Link to='/quotation'>
                <QuoteBtn />
              </Link>
            </div>

            <div className="app__navbar-menu">

              <HiMenuAlt4 onClick={() => setToggle(true)} />

              {
                toggle && (
                  <motion.div
                    whileInView={{ x: [300, 0] }}
                    transition={{ duration: 0.86, ease: 'easeOut' }}
                  >
                    
                    <HiX onClick={() => setToggle(false)} />

                    {/* Navbar Links */}
                      <ul>
                          <li>
                            <Link to="/" onClick={() => setToggle(false)}>Home</Link>
                          </li>

                          <li>
                            <Link to="/about" onClick={() => setToggle(false)}>About Us</Link>
                          </li>
                          <li>
                            <Link to="/services" onClick={() => setToggle(false)}>Services</Link>
                          </li>
                          <li>
                            <Link to="/projects" onClick={() => setToggle(false)}>Projects</Link>
                          </li>
                          <li className='quote-btn-menu'>
                            <Link to="/quotation" onClick={() => setToggle(false)}><p>Get a Quote <span><BiPaperPlane /></span></p></Link>
                          </li>
                      </ul>

                  </motion.div>
                )
              }

            </div>

        </nav>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/quotation' element={<Quotation />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </>
  )
}

export default Navbar