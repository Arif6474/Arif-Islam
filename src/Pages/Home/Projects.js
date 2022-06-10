import React from 'react';
import useProjects from '../../hooks/useProjects';

import Project from './Project';

const Projects = () => {
    const [projects] = useProjects([]);
    return ( <div>
        <div className="grid grid-cols-3 gap-4">
         {
             projects.map((project) => <Project key={project._id} project={project}></Project>)
         }
        </div>
        </div>
    );
};

export default Projects;