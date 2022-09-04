import React from 'react';
import './Skill.css'
import  html from '../../images/programming/html.png'
import  css from '../../images/programming/css.png'
import  tailwind from '../../images/programming/tailwind.png'
import  js from '../../images/programming/js.png'
import  react from '../../images/programming/react.png'
import  node from '../../images/programming/node.png'
import  express from '../../images/programming/express.png'
import  mongodb from '../../images/programming/mongodb1.png'
const Skill = () => {
    return (
    <div className="container">
        <h4 
        data-aos="zoom-in"  
        data-aos-easing="linear"
        data-aos-duration="1200"
        className="text-center text-3xl font-bold text-white">My Skill</h4>
        <div className="grid grid-cols-1  lg:grid-cols-4 gap-4 p-8 justify-items-center">
    <div
    data-aos="fade-down-left"  
    data-aos-easing="linear"
    data-aos-duration="1500" class="box-div box1 box-body">
    <div class="">
<img src={html} className="rounded-full bg-white w-28 h-28 m-8" alt="people"/>
  </div>
    <div class="text-white items-center text-center">
      <h4 class="">HTML5</h4>
    </div>
  </div>
    <div
    data-aos="fade-down-right"  
    data-aos-easing="linear"
    data-aos-duration="1500"
     class="box-div box1 box-body">
    <div class="rounded">
    <img src={css} className="rounded-full w-28 h-28 m-8" alt="people"/>
  </div>
  <div class="text-white items-center text-center">
      <h4 class="">CSS3</h4>
    </div>
  </div>
    <div data-aos="fade-down-left"  
    data-aos-easing="linear"
    data-aos-duration="1500"
     class="box-div box1 box-body">
    <div class="rounded">
    <img src={tailwind} className="rounded-full w-28 h-28 m-8" alt="people"/>
  </div>
  <div class="text-white items-center text-center">
      <h4 class="">Tailwind</h4>
    </div>
  </div>
    <div data-aos="fade-down-right"  
    data-aos-easing="linear"
    data-aos-duration="1500"
     class="box-div box1 box-body">
    <div class="rounded">
    <img src={js} className="rounded-full w-28 h-28 m-8" alt="people"/>
  </div>
  <div class="text-white items-center text-center">
      <h4 class="">Javascript</h4>
    </div>
  </div>
    <div data-aos="fade-up-left"  
    data-aos-easing="linear"
    data-aos-duration="1500"
     class="box-div box1 box-body">
    <div class="rounded">
    <img src={react} className="rounded-full w-28 h-28 m-8" alt="people"/>
  </div>
  <div class="text-white items-center text-center">
      <h4 class="">React</h4>
    </div>
  </div>
    <div data-aos="fade-up-right" 
    data-aos-easing="linear"
    data-aos-duration="1500"
     class="box-div box1 box-body">
    <div class="rounded">
    <img src={node} className="rounded-full bg-white w-28 h-28 m-8" alt="people"/>
  </div>
  <div class="text-white items-center text-center">
      <h4 class="">Node.js</h4>
    </div>
  </div>
    <div data-aos="fade-up-left"  
    data-aos-easing="linear"
    data-aos-duration="1500"
     class="box-div box1 box-body">
    <div class="rounded">
    <img src={express} className="rounded-full w-28 h-28 m-8" alt="people"/>
  </div>
  <div class="text-white items-center text-center">
      <h4 class="">Express.js</h4>
    </div>
  </div>
    <div data-aos="fade-up-right"  
    data-aos-easing="linear"
    data-aos-duration="1500"
     class="box-div box1 box-body">
    <div class="rounded">
    <img src={mongodb} className="rounded-full w-28 h-28 m-8" alt="people"/>
  </div>
  <div class="text-white items-center text-center">
      <h4 class="">Mongodb</h4>
    </div>
  </div>
  </div>
  </div>
    );
};

export default Skill;