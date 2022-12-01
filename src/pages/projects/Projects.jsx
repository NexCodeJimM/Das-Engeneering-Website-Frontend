import React from 'react';

import './Projects.scss';

import { images } from '../../constants';

const Projects = () => {
  return (
    <div className='project-main-container'>
      <div className="left-container">
        
        <div className="project-container-title">
          <h1>Oops!</h1>
          <h2><span>Under</span> Construction</h2>
        </div>

        <div className="project-container-body">
          <p>We will soon be posting the projects that we built on this page. So, stay tuned!</p>
        </div>

      </div>

      <div className="right-container">
        <img src={images.construction} alt='construction'/>
      </div>
    </div>
  )
}

export default Projects;