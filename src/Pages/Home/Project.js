import React from 'react';


const Project = ({project}) => {
    const {live, client, server, features, technology, name , title , picture } = project;
    
    return (
        <div class=" w-96 mx-auto shadow-xl">
             <h2 class="text-xl font-semibold text-center my-2 text-white">{title}</h2>
  <div class="mx-auto w-full p-4">
  <figure><img src={picture} class="rounded " alt="Shoes" /></figure>
  </div>
  <div class="card-body">
   <h2 class="text-xl font-bold text-white "> {name}</h2>
   <p class="text-sm text-white">Features: {features}</p>
   <p class="text-sm text-white">Technology: {technology}</p>
    <div>
        <button class=" btn btn-sm  btn-outline btn-success mx-2 " > <a class="text-white font-bold text-decoration-none" href={live}>Live Site</a></button>
        <button class=" btn btn-sm btn-outline btn-success mx-4" > <a class="text-white font-bold text-decoration-none" href={client}>Client</a></button>
        <button class=" btn btn-sm btn-outline btn-success mx-2" > <a class="text-white font-bold text-decoration-none" href={server}>Server</a></button>
       
    </div>
  </div>
</div>
    );
};

export default Project;