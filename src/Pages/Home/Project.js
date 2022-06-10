import React from 'react';

const Project = ({project}) => {
    const {name , title , features, picture , technology } = project;
    return (
        <div class="card w-96  shadow-xl">
             <h2 class="card-title">{title}</h2>
  <figure><img src={picture} alt="Shoes" /></figure>
  <div class="card-body">
   <h2> {name}</h2>
    <p>Features: {features}</p>
    <p>Technology: {technology}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">See Details</button>
    </div>
  </div>
</div>
    );
};

export default Project;