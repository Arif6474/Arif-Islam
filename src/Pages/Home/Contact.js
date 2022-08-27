import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pg7eh8y', 'template_syp2b0d', form.current, 'VxMdW-cPTFgwTvLDE')
      .then((result) => {
          console.log(result.text);
          toast.success("message sent successfully");
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div>
            <div class="hero min-h-screen shadow-xl">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="ml-4">
    <h1  class="text-3xl font-bold text-green-300">Contact Me</h1>
      <p class=" text-white  ">Address: Hathazari, Chittagong</p>
      <p class=" text-white ">Phone: +8801820082894</p>
      <p class=" text-white ">Email: arifulislam64743@gmail.com</p>
    </div>
    <div class=" flex-shrink-0 w-full max-w-sm shadow-2xl">
      <div class="card-body">
      <form ref={form} onSubmit={sendEmail}
       
        className="grid grid-cols-1 gap-4 mt-4 justify-items-center"
      >
        <input
          required
          type="text"
          name="user_name"
          placeholder = "Name"
          className="input  input-warning input-bordered w-full max-w-xs"
        />
        <input
          required
          type="email"
          name="user_email"
          placeholder="Email"
          className="input  input-warning input-bordered w-full max-w-xs"
        />
        

        <textarea
        required
          type="text"
          name="message"
          placeholder="Type here..."
          className="input input-bordered input-warning input-lg w-full h-32 max-w-xs "
        />
        
        <input
          type="submit" value="Send"
          className="btn  btn-outline btn-success w-full my-4 text-white font-bold max-w-xs"
        />
      </form>
      </div>
      <ToastContainer />
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Contact;