import React from "react";
import coder from "../../images/coder5-removebg-preview.png";

const About = () => {
  return (
    <div className="container my-28">
      <div className="flex flex-col-reverse lg:flex-row justify-between lg:items-center">
        <div
          className="banner-left-side"
          data-aos="zoom-in-up"
          data-aos-easing="gradient(0,0,1200)"
          data-aos-duration="1500"
        >
          <img src={coder} className="w-96" alt="" />
        </div>
        <div className="lg:w-2/4">
          <h1
            data-aos="zoom-in-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-xl font-bold text-white "
          >
            About Me
          </h1>
          <p
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="lg:pt-6 text-slate-400 font-semibold"
          >
            I'm a MERN Stack Developer. I'm constantly learning programming
            language to improve my skill. I have already done some MERN projects.
            I want to learn new things more and I'm a quick learner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
