import React from 'react';
import programming from '../../images/coder4.png'
import Buttons from '../Button/Buttons';

const Personal = () => {
  

    return (
        <div  class="container my-28">
  <div class="flex flex-col lg:flex-row-reverse justify-around items-center ">
   <div>
   <img src={programming} class="" alt=''/>
   </div>
    <div class="">
        <p class="text-3xl text-white font-bold">Hello,</p>
      <h1 class="lg:text-3xl  text-white font-bold">I'm Arif Islam</h1>
       <p class=" font-bold text-2xl text-amber-200 " >Junior Web Developer</p>
       <Buttons/>
    </div>
  </div>
</div>
    );
};

export default Personal;