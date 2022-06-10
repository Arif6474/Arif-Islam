import React from 'react';

const Contact = () => {
    return (
        <div>
            <div class="hero min-h-screen shadow-xl">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
    <h1  class="text-5xl font-bold text-green-300">Contact Me</h1>
      <p class="p4-6 text-white font-bold "> Hathazari, Chittagong</p>
      <p class="p4-6 text-white font-bold ">+8801820082894</p>
      <p class="p4-6 text-white font-bold"> arifulislam64743@gmail.com</p>
    </div>
    <div class=" flex-shrink-0 w-full max-w-sm shadow-2xl">
      <div class="card-body">
      <form
       
        className="grid grid-cols-1 gap-4 mt-4 justify-items-center"
      >
        <input
          
          type="text"
          name="name"
          placeholder = "Name"
          className="input  input-warning input-bordered w-full max-w-xs"
        />
        <input
          
          type="email"
          name="email"
          placeholder="Email"
          className="input  input-warning input-bordered w-full max-w-xs"
        />
        

        <input
          type="text"
          name="description"
          placeholder="Description"
          className="input input-bordered input-warning input-lg w-full max-w-xs max-h-32"
        />
        
        <input
          type="submit"
          value="Submit"
          className="btn  btn-outline btn-success w-full my-4 text-white font-bold max-w-xs"
        />
      </form>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Contact;