import React from 'react';

import './CoreValues.scss';

import { images } from '../../../../constants';

const CoreValues = () => {
  return (
    <div className='values-main-container'>
      <div className="values-inner-container">

        <div className="values-title">
          <img src={images.values} alt="values" />
          <h1>Our Core <span>Values</span></h1>
          <div className='divider' />
        </div>

        <div className="values-content">
          <div className="values-list">

            <div className="list-title">
              <h2><span>D</span>etermined - </h2>
              <p>
                we over achieve, seize opportunities quickly and rigorously research ways to create sustainable
                value for the business.
              </p>
            </div>

            <div className="list-title">
              <h2><span>A</span>ccuracy - </h2>
              <p>
                we plan well, hold ourselves accountable and ensure things are done effectively and efficiently.
              </p>
            </div>

            <div className="list-title">
              <h2><span>S</span>atisfaction - </h2>
              <p>
                as a team we thrive to achieve satisfaction for our clients and partner’s, that’s why: By
                wisdom, we build.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default CoreValues;