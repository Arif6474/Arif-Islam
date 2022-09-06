import React from 'react';
import DetailsButton from './DetailsButton';


const Project = ({project}) => {
    const { name , picture } = project;
    
    return (
        <div class="w-4/5 mx-auto ">
            
  <div class="mx-auto w-full ">
  <figure><img src={picture} class="rounded " alt="Shoes" /></figure>
  </div>
  <div class="card-body">
   <h2 class="text-xl font-bold text-white text-center"> {name}</h2>
   <div className="mx-auto">
    <DetailsButton/>
    </div>
   
  </div>
</div>
    );
};

export default Project;