import React from 'react';
import { useState } from 'react';
import ReactiveButton from 'reactive-button';
const DetailsButton = () => {
    const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');

    // send an HTTP request
    setTimeout(() => {
      setState('success');
    }, 2000);
  };
    return (
        <div data-aos="fade-up"  
        data-aos-easing="linear"
        data-aos-duration="2000">
             <ReactiveButton
      buttonState={state}
      idleText="Details"
      color="teal" 
      style={{fontSize: '16px' , fontWeight: 'bold'}}
      outline 
      
      loadingText="Loading"
      successText="Done"
      onClick={onClickHandler}
    />
        </div>
    );
};

export default DetailsButton;