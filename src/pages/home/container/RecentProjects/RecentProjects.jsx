import React from 'react';

import './RecentProjects.scss';

import { motion } from 'framer-motion';

const RecentProjects = () => {
  return (
    <div className="app__main-container">

      <div className="app__section-title">

        <div className="title-header">
          <h1>Recent Projects</h1>
        </div>
        
        <div className="divider">
          <div className='app__header-line-bold' />
          <div className='app__header-line-thin' />
        </div>
        
      </div>
    </div>
  )
}

export default RecentProjects