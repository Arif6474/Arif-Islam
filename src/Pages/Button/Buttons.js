import React, { useState } from 'react';

import ReactiveButton from 'reactive-button';

const Buttons = () => {
    const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');

    // send an HTTP request
    setTimeout(() => {
      setState('success');
    }, 1500);
  };

    return (
        <ReactiveButton
        style={{fontSize: '20px' , fontWeight: 'bold'}}
        color="red"
        
        buttonState={state}
        idleText="Hire me"
        loadingText="Loading"
        successText="Done"
        onClick={onClickHandler}
      />
    );
};

export default Buttons;