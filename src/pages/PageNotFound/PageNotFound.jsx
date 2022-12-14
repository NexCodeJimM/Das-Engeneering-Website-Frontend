import React, { Component } from 'react';

import './PageNotFound.scss';

import { images } from '../../constants';
import { seo } from '../../functions/useDocumentTitle';
export default class PageNotFound extends Component {
    
    componentDidMount() {
        seo({
            title: '404 Page Not Found! - Das Engeneering',
            metaDescription: 'The page you are trying to access do not exist.'
        })
    }

    render() {
        return (
            <div className="notfound-main-container">
                <div className="container-img">
                    <img src={images.pageNotFound} alt="Page Not Found..." />
                </div>
        
                <div className="container-content">
                    <div className="notFound-title">
                        <h1>Oops!</h1>
                    </div>
        
                    <div className="notFound-body">
                        <h2>Page Not Found.</h2>
                        <p>The page you're trying to access do not exist.</p>
                    </div>
                </div>
            </div>
          )
    }
}
