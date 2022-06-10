import React from 'react';
import useProjects from '../../hooks/useProjects';

import Project from './Project';

const Projects = () => {
    const [projects] = useProjects([]);
    return ( <div className="my-8 shadow-xl">
        <h1 className="text-4xl  font-bold text-center my-4 text-green-300"> My Projects </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4">
         {
             projects.map((project) => <Project key={project._id} project={project}></Project>)
         }
        </div>
        </div>
    );
};

export default Projects;