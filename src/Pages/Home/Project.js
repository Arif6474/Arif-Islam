import React from 'react';


const Project = ({project}) => {
    const {features, technology, name , title , picture } = project;
    
    return (
        <div class="card w-96 mx-auto shadow-xl">
             <h2 class="text-3xl text-center my-2 text-green-600">{title}</h2>
  <figure><img src={picture} alt="Shoes" /></figure>
  <div class="card-body">
   <h2 class="text-xl"> {name}</h2>
   <p>Features: {features}</p>
   <p>Technology: {technology}</p>
    
  </div>
</div>
    );
};

export default Project;