import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'
import address from '../../images/programming/address.png'
import phone from '../../images/programming/phone.png'
import email from '../../images/programming/email2.png'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pg7eh8y', 'template_syp2b0d', form.current, 'VxMdW-cPTFgwTvLDE')
      .then((result) => {
          console.log(result.text);
          toast.success("Message sent successfully");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
       
            <div className="container my-28">
  <div className="flex flex-col lg:flex-row  justify-between items-center">
    <div className=" basis-1/3 my-8 contact-body contact-div contact-box p-4 ">
    <h1 data-aos="zoom-in-up" 
      data-aos-easing="linear"
      data-aos-duration="2000"
       className="text-3xl font-bold text-white text-center mb-4">Contact Me</h1>
    <div className="flex flex-row items-center h-10">
    <img data-aos="zoom-in-down" 
      data-aos-easing="linear"
      data-aos-duration="1000"
       src={address} alt="" className="rounded-full w-6 h-6" /> 
    <p data-aos="fade-down-left"  
    data-aos-easing="linear"
    data-aos-duration="1000"
     className=" text-white pt-3 pl-2 ">  Hathazari, Chittagong</p>
    </div>
    <div className="flex flex-row items-center h-10">
    <img data-aos="zoom-in-down" 
      data-aos-easing="linear"
      data-aos-duration="1500"
       src={phone} alt="" className="rounded-full w-6 h-6" /> 
    <p data-aos="fade-down-left"  
    data-aos-easing="linear"
    data-aos-duration="1500"
     className=" text-white pt-3 pl-2 ">  +8801820082894</p>
    </div>
    <div className="flex flex-row items-center h-10">
    <img data-aos="zoom-in-down" 
      data-aos-easing="linear"
      data-aos-duration="2000"
       src={email} alt="" className="rounded-full w-6 h-6" /> 
    <p data-aos="zoom-in"  
    data-aos-easing="linear"
    data-aos-duration="2000"
     className=" text-white pt-3 pl-2 ">  arifulislam64743@gmail.com</p>
    </div>
    </div>
    <div className=" lg:basis-2/4 box-body box-div2 box2 p-4">
   
      <form ref={form} onSubmit={sendEmail}
       
        
      >
        <div className="grid grid-col lg:grid-cols-2 gap-4 mt-4 justify-items-center">
        <input
        data-aos="zoom-in-down" 
        data-aos-easing="linear"
        data-aos-duration="1500"
          required
          type="text"
          name="user_name"
          placeholder = "Name"
          className="input   input-bordered w-full max-w-xs"
        />
        <input
        data-aos="zoom-in-down" 
        data-aos-easing="linear"
        data-aos-duration="1500"
          required
          type="email"
          name="user_email"
          placeholder="Email"
          className="input   input-bordered w-full max-w-xs"
        />
        </div>
        <div className="grid grid-col lg:grid-cols-3 gap-4 mt-4 justify-items-center ">

        <textarea
        data-aos="zoom-in" 
        data-aos-easing="linear"
        data-aos-duration="1500"
        required
          type="text"
          name="message"
          placeholder="Type here..."
          className="input input-bordered  input-lg w-full h-40 my-2  col-span-2 "
        />
        
        <input
        data-aos="flip-right" 
        data-aos-easing="linear"
        data-aos-duration="2000"
          type="submit" value="Send"
          className="rounded bg-teal-800 hover:bg-teal-500 lg:my-16 px-4 py-2 text-white  font-bold w-full lg:w-2/3"
        />
        </div>
      </form>
  
      <ToastContainer />
    </div>
  </div>
</div>
        
    );
};

export default Contact;