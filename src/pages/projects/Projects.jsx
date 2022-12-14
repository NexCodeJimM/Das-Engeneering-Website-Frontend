import React, { Component } from 'react';

import './Projects.scss';

import { images } from '../../constants';
import { seo } from '../../functions/useDocumentTitle';


export default class Projects extends Component{

  componentDidMount() {
    seo({
      title: 'This page is under construction - Das Engeneering',
      metaDescription: 'We will soon be posting the projects that we completed!'
    })
  }

  render() {
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
  
}