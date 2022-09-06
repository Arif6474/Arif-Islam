import React from 'react';
import useProjects from '../../hooks/useProjects';

import Project from './Project';

const Projects = () => {
    const [projects] = useProjects([]);
    return ( <div className="my-16 container">
        <h1 className="text-3xl font-bold text-white text-center"> My Projects </h1>
        <div className="grid lg:grid-cols-3 py-4 md:grid-cols-1 gap-4">
         {
             projects.map((project) => <Project key={project._id} project={project}></Project>)
         }
        </div>
        </div>
    );
};

export default Projects;