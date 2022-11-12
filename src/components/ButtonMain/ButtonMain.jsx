import React from 'react';

import './ButtonMain.scss';

const ButtonMain = (props) => {

    const [title] = (props);

  return (
    <>
        <button title={title}/>
    </>
  )
}

export default ButtonMain;