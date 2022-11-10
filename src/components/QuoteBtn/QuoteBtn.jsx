import React from 'react';
import './QuoteBtn.scss';

import { BiPaperPlane } from 'react-icons/bi';
const QuoteBtn = () => {
  return (
    <div className='app__btn'>
        <p>Get A Quote</p>
        <span><BiPaperPlane/></span>
    </div>
  )
}

export default QuoteBtn