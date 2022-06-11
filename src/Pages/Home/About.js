import React from 'react';
import coder from '../../images/coder.webp'
const About = () => {
    return (
        <div  > 
           
            <div class="hero min-h-screen shadow-xl">
  <div class="hero-content flex-col lg:flex-row">
    <img src={coder} class="max-w-sm lg:ml-32 rounded-lg shadow-2xl" alt="" />
    <div class="lg:mx-28">
      <h1 class="text-5xl font-bold text-green-300">About Me</h1>
      <p  class="lg:pt-6 text-white">I'm a Junior Frontend Developer. I'm constantly learning programming language for improving my skill. I want to be a full stack web developer. I have already done some projects. I want to learn new languages more and more.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default About;