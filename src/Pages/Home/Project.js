import React from 'react';


const Project = ({project}) => {
    const {features, technology, name , title , picture } = project;
    
    return (
        <div class=" w-96 mx-auto shadow-xl">
             <h2 class="text-3xl text-center my-2 text-green-600">{title}</h2>
  <figure><img src={picture} class="rounded" alt="Shoes" /></figure>
  <div class="card-body">
   <h2 class="text-2xl font-bold text-white "> {name}</h2>
   <p class="text-sm text-white">Features: {features}</p>
   <p class="text-sm text-white">Technology: {technology}</p>
    
  </div>
</div>
    );
};

export default Project;