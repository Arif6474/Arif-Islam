import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div  className="">
           
           <footer className="footer personal-footer  p-16  text-white">
  <div className="text-white">
    <span className="footer-title text-gray-200" >Services</span> 
    <a  data-aos="fade-up-left"  
    data-aos-easing="linear"
    data-aos-duration="1000"
     className="link link-hover text-gray-200" >Branding</a> 
    <a data-aos="fade-up-left"  
    data-aos-easing="linear"
    data-aos-duration="1200" className="link link-hover text-gray-200" >Design</a> 
    <a data-aos="fade-up-left"  
    data-aos-easing="linear"
    data-aos-duration="1500" className="link link-hover text-gray-200" >Marketing</a> 
    <a data-aos="fade-up-left"  
    data-aos-easing="linear"
    data-aos-duration="1800" className="link link-hover text-gray-200" >Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a data-aos="fade-up"  
    data-aos-easing="linear"
    data-aos-duration="1000" className="link link-hover text-gray-200" >About us</a> 
    <a data-aos="fade-up"  
    data-aos-easing="linear"
    data-aos-duration="1200" className="link link-hover text-gray-200" >Contact</a> 
    <a data-aos="fade-up"  
    data-aos-easing="linear"
    data-aos-duration="1500"  className="link link-hover text-gray-200" >Jobs</a> 
    <a data-aos="fade-up"  
    data-aos-easing="linear"
    data-aos-duration="1800" className="link link-hover text-gray-200" >Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a data-aos="fade-up-right"  
    data-aos-easing="linear"
    data-aos-duration="1000" className="link link-hover text-gray-200" >Terms of use</a> 
    <a data-aos="fade-up-right"  
    data-aos-easing="linear"
    data-aos-duration="1200" className="link link-hover text-gray-200" >Privacy policy</a> 
    <a data-aos="fade-up-right"  
    data-aos-easing="linear"
    data-aos-duration="1500" className="link link-hover text-gray-200" >Cookie policy</a>
  </div>
</footer> 

        </div>
    );
};

export default Footer;