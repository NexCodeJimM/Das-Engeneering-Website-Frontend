import React from 'react';

import './ContactSubmitted.scss';

import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Component } from 'react';
import { seo } from '../../functions/useDocumentTitle';

export default class ContactSubmitted extends Component {
  
    componentDidMount() {
        seo({
            title: 'Thank you! It has now been submitted! - Das Engeneering'
        })
    }

    render() {
        return (
            <div className="quote-success-main-conatiner">
        
                <div className="quote-success-inner-container">
                    
                    <div className="icon-container">
                        <BsFillCheckCircleFill />
                    </div>
        
                    <div className="success-title">
                        <h1>Thank you!</h1>
                    </div>
        
                    <div className="success-body">
                        <p>We received your message and we will get back to you as soon as possible!</p>
                    </div>
        
                </div>
        
            </div>
        )
    }
}
