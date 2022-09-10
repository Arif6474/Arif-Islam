import React from 'react';
import './Project.css'

const Project = ({project}) => {
    const { name , picture } = project;
    
    return (
        <div className="w-4/5 mx-auto project-body project-div project-circle">
            
  <div className="mx-auto p-12 ">
  <figure><img data-aos="zoom-in"  
        data-aos-easing="linear"
        data-aos-duration="2000" src={picture} className="rounded" alt="Shoes" /></figure>
  <div className="card-body">
   <h2 data-aos="flip-left"  
        data-aos-easing="linear"
        data-aos-duration="2000" className="text-lg font-bold text-white text-center"> {name}</h2>
   <div className="mx-auto">
   <button className="detail-btn ">Details</button>
    
    </div>
  </div>
  </div>
</div>
    );
};

export default Project;