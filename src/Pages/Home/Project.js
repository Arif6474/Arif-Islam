import React from 'react';
import DetailsButton from './DetailsButton';


const Project = ({project}) => {
    const { name , picture } = project;
    
    return (
        <div className="w-4/5 mx-auto ">
            
  <div className="mx-auto w-full ">
  <figure><img src={picture} className="rounded " alt="Shoes" /></figure>
  </div>
  <div className="card-body">
   <h2 className="text-xl font-bold text-white text-center"> {name}</h2>
   <div className="mx-auto">
    <DetailsButton/>
    </div>
   
  </div>
</div>
    );
};

export default Project;