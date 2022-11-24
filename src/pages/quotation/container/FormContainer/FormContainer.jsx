import React from 'react';

import './FormContainer.scss';

import { QuotationForm } from '../../../../components';
import { images } from '../../../../constants';

const FormContainer = () => {
  return (
    <div className='form-main-container'>

        <div className="image-container">
            <img src={images.quotation}/>
        </div>

        <QuotationForm />
    </div>
  )
}

export default FormContainer;