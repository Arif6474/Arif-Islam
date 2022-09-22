import React from 'react';
import useProjects from '../../hooks/useProjects';

import Project from './Project';

const Projects = () => {
    const [projects] = useProjects([]);
    return ( <div className="my-16 container">
        <h1 data-aos="zoom-in"  
        data-aos-easing="linear"
        data-aos-duration="2000" className="text-3xl font-bold text-white text-center">Recently I have done Projects </h1>
        <div className="grid lg:grid-cols-3 py-4 md:grid-cols-1 gap-4">
         {
             projects.map((project) => <Project key={project._id} project={project}></Project>)
         }
        </div>
        </div>
    );
};

export default Projects;