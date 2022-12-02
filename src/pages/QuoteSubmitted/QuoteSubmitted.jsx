import React from 'react';

import './QuoteSubmitted.scss';

import { BsFillCheckCircleFill } from 'react-icons/bs';

const QuoteSubmitted = () => {
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
                <p>We will be sending you an email with the quotation you requested.</p>
            </div>

        </div>

    </div>
  )
}

export default QuoteSubmitted