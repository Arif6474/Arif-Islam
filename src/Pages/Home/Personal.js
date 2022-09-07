import React from 'react';
import programming from '../../images/coder4.png'
import Buttons from '../Button/Buttons';

const Personal = () => {
  

    return (
        <div  className="container my-28">
  <div className="flex flex-col-reverse lg:flex-row-reverse lg:justify-around items-center ">
   <div 
     className="banner-left-side"
     data-aos="zoom-in-up"
     data-aos-easing="gradient(0,0,1200)"
     data-aos-duration="1500"
     
   >
   <img src={programming} className="w-96" alt=''/>
   </div>
    <div className="mb-8">
        <p 
        data-aos="fade-down-right" 
        data-aos-easing="linear"
        data-aos-duration="800"
        className="text-3xl text-white font-bold">Hello,</p>
      <h1
      data-aos="fade-down-left" 
      data-aos-easing="linear"
      data-aos-duration="1000"
       className="lg:text-3xl  text-white font-bold">I'm Arif Islam</h1>
       <p 
       data-aos="zoom-in"  
       data-aos-easing="linear"
       data-aos-duration="1200"
        className=" font-bold text-2xl text-amber-200 " >Junior Web Developer</p>
       <Buttons />
    </div>
  </div>
</div>
    );
};

export default Personal;