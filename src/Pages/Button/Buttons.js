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

    return (<div data-aos="fade-up"  
    data-aos-easing="linear"
    data-aos-duration="1500">

      <ReactiveButton
      
      style={{fontSize: '18px' , fontWeight: 'bold'}}
      color="red"
      buttonState={state}
      idleText="Hire me"
      loadingText="Loading"
      successText="Done"
      outline 
   
      onClick={onClickHandler}
    />
    </div>
    );
};

export default Buttons;