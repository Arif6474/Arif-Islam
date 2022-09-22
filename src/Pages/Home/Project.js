import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css'

const Project = ({project}) => {
    const {_id, name , picture } = project;

    const navigate = useNavigate();
    const navigateToProjectDetail = (id) => {
      navigate(`/project/${id}`)
    }
    return (
        <div className="w-4/5 mx-auto project-div project-box2">
            
  <div className="mx-auto p-12 ">
  <figure><img data-aos="zoom-in"  
        data-aos-easing="linear"
        data-aos-duration="2000" src={picture} className="rounded" alt="Shoes" /></figure>
  <div className="card-body">
   <h2 data-aos="flip-left"  
        data-aos-easing="linear"
        data-aos-duration="2000" className="text-lg font-bold text-white text-center"> {name}</h2>
   <div className="mx-auto">
   <button 
   data-aos="zoom-in-up"  
   data-aos-easing="linear"
   data-aos-duration="2000" onClick={() =>navigateToProjectDetail(_id)} className="detail-btn">Details</button>
 
    </div>
  </div>
  </div>
</div>
    );
};

export default Project;