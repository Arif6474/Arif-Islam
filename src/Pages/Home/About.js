import React from 'react';
import coder from '../../images/coder5-removebg-preview.png'
const About = () => {
  
    return (
        
      
            <div class="container my-28">
  <div class="flex flex-col-reverse lg:flex-row justify-between lg:items-center">
  <div 
     className="banner-left-side"
     data-aos="zoom-in-up"
     data-aos-easing="gradient(0,0,1200)"
     data-aos-duration="1500"
   >
   <img src={coder} class="w-96" alt=''/>
   </div>
    <div 
    class="lg:w-2/4">
      <h1 
      data-aos="zoom-in-down" 
      data-aos-easing="linear"
      data-aos-duration="1500"
      
       class="text-3xl font-bold text-white ">About Me</h1>
      <p 
      data-aos="fade-up" 
      data-aos-easing="linear"
      data-aos-duration="1500" 
       class="lg:pt-6 text-slate-400 font-semibold">I'm a Junior Web Developer. I'm constantly learning programming language for improving my skill. I want to be a full stack web developer. I have already done some projects. I want to learn new languages more and more.</p>
      
    </div>
  </div>
</div>

    );
};

export default About;