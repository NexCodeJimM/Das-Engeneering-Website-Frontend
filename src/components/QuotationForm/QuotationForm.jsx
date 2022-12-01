import React from 'react';

import './QuotationForm.scss';

const QuotationForm = () => {
  return (
    <div className='quote-main-form'>
      <h1>Quotation Form</h1>
      <form action="https://public.herotofu.com/v1/cd9de3f0-6c00-11ed-a377-655c67143cec" method="POST">
        <div className='form-section'>
          <label for="name">Full Name:</label>
          <input name="Name" id="name" type="text" placeholder='John Rocceli' required />
        </div>
        <div className='form-section'>
          <label for="email">Email Address</label>
          <input name="Email" id="email" type="email" placeholder='john.rocceli@email.com' required  />
        </div>
        <div className='form-section'>
          <label for="number">Contact Number</label>
          <input name="Number" id="number" type="text" placeholder='051 234 5678' required  />
        </div>
        <div className="form-section">
          <label for='service'>Service Type</label>
          <select name='Service' id='service' placeholder='Select Type...'>
            <option value='Project Management'>Project Management</option>
            <option value='Heavy & Light Machinery & Equipment Rental'>Heavy & Light Machinery & Equipment Rental</option>
            <option value='Commercial Brokers'>Commercial Brokers</option>
          </select>
        </div>
        <div className='form-section'>
          <input className='submit-btn' type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default QuotationForm;