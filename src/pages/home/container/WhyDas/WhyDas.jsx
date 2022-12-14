import React from 'react';

import './WhyDas.scss';

import { IconTable } from './container';
import { DividerWhite } from '../../../../components';

const WhyDas = () => {
  return (
    <div className='why-main-container'>
      <div className="why-inner-container">
        <div className="why-section-title">
          <div className="why-title-header">
            <h1>Why <span>DAS Engeneering</span>?</h1>
          </div>

          <DividerWhite />
        </div>
      

        <div className="why-content">
          <IconTable />
        </div>
      </div>
    </div>
  )
}

export default WhyDas;