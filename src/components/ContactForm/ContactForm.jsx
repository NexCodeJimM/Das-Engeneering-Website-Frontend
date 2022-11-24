import React from 'react';

import './ContactForm.scss';

const ContactForm = () => {
  return (
    <div className='contact-main-form'>
      <h1>Contact Form</h1>
      <form action="https://public.herotofu.com/v1/6aaa1850-6c27-11ed-a377-655c67143cec" method="POST">
        <div className='contact-form-section'>
          <label for="name">Full Name</label>
          <input name="Name" id="name" type="text" placeholder='John Doe' required />
        </div>
        <div className='contact-form-section'>
          <label for="email">Email Address</label>
          <input name="Email" id="email" type="email" placeholder='john.doe@email.com' required  />
        </div>
        <div className='contact-form-section'>
          <label for="subject">Subject</label>
          <input name="Subject" id="subject" type="text" placeholder='Enter Subject...' required  />
        </div>
        <div className='contact-form-section'>
          <label for="message">Message</label>
          {/* <input name="Message" id="message" type="message" required  /> */}
          <textarea name='Message' id='message' placeholder='Write Something...' required/>
        </div>
        <div className='contact-form-section'>
          <input className='contact-submit-btn' type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  )
}

export default ContactForm;