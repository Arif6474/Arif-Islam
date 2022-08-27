import React from 'react';
import { useSpring ,animated} from 'react-spring';
import coder from '../../images/coder.webp'
const About = ({ isVisible}) => {
  const props = useSpring({
     to: { opacity: isVisible ? 0 : 1 },
      config: { duration: 2000 }, 
      from: { opacity: isVisible ? 1 : 0 } 
    })
    return (
        
      
            <animated.div style={props}  class="hero my-8 shadow-xl">
  <div class="hero-content flex-col lg:flex-row">
    <div class="">
      <img src={coder} class="max-w-sm lg:ml-32 w-60 h-60 rounded-lg shadow-2xl" alt="" />
    </div>
    <div class="lg:mx-28">
      <h1 class="text-3xl font-bold text-slate-900 ">About Me</h1>
      <p  class="lg:pt-6 text-white">I'm a Junior Frontend Developer. I'm constantly learning programming language for improving my skill. I want to be a full stack web developer. I have already done some projects. I want to learn new languages more and more.</p>
      
    </div>
  </div>
</animated.div>

    );
};

export default About;