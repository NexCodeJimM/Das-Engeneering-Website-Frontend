import React, { useState } from 'react';

import './Accordion.scss';

const Accordion = () => {

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
        return setSelected(null);
    }

    setSelected(i);
  }

  return (
    <div className="wrapper">
        <div className="accordion">
            
            {data.map((faq, i) => (
                <div className='item'>
                    <div className='title' onClick={() => toggle(i)}>
                        <h2>{faq.question}</h2>
                        <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className={selected === i ? 'content show' : 'content'}>
                        {faq.answer}
                    </div>
                </div>
            ))}
    
        </div>
    </div>
  )
}

const data = [
    {
        question: 'Question 1',
        answer: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut diam congue, consequat metus at, rutrum justo. Mauris non egestas erat, quis malesuada leo. Pellentesque lobortis fringilla est, sed bibendum orci mattis nec. Sed vehicula, augue a malesuada consequat, metus nisi malesuada augue, luctus gravida nisi lorem vel ex. Praesent dui nibh, varius id accumsan ut, venenatis eu sapien. Sed nisl ipsum, mollis sit amet felis eu, mattis interdum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla pellentesque ante sit amet dolor condimentum iaculis a ac orci.'
    },
    {
        question: 'Question 2',
        answer: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut diam congue, consequat metus at, rutrum justo. Mauris non egestas erat, quis malesuada leo. Pellentesque lobortis fringilla est, sed bibendum orci mattis nec. Sed vehicula, augue a malesuada consequat, metus nisi malesuada augue, luctus gravida nisi lorem vel ex. Praesent dui nibh, varius id accumsan ut, venenatis eu sapien. Sed nisl ipsum, mollis sit amet felis eu, mattis interdum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla pellentesque ante sit amet dolor condimentum iaculis a ac orci.'
    },
    {
        question: 'Question 3',
        answer: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut diam congue, consequat metus at, rutrum justo. Mauris non egestas erat, quis malesuada leo. Pellentesque lobortis fringilla est, sed bibendum orci mattis nec. Sed vehicula, augue a malesuada consequat, metus nisi malesuada augue, luctus gravida nisi lorem vel ex. Praesent dui nibh, varius id accumsan ut, venenatis eu sapien. Sed nisl ipsum, mollis sit amet felis eu, mattis interdum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla pellentesque ante sit amet dolor condimentum iaculis a ac orci.'
    },
    {
        question: 'Question 4',
        answer: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut diam congue, consequat metus at, rutrum justo. Mauris non egestas erat, quis malesuada leo. Pellentesque lobortis fringilla est, sed bibendum orci mattis nec. Sed vehicula, augue a malesuada consequat, metus nisi malesuada augue, luctus gravida nisi lorem vel ex. Praesent dui nibh, varius id accumsan ut, venenatis eu sapien. Sed nisl ipsum, mollis sit amet felis eu, mattis interdum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla pellentesque ante sit amet dolor condimentum iaculis a ac orci.'
    },
]

export default Accordion