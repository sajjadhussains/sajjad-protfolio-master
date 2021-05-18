import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../Projects/Projects';
import './ProjectGallery.css'
import project from '../../data/project'
import { useState } from 'react';

const ProjectGallery = () => {
    const projectSlice = project.slice(0,4);
    const [projects, allProjects] = useState(projectSlice);
    
    return (
       <div>
            <div className="container mb-5 mt-2">
        <div className='project-gallery-header-text pt-5'>
            <h1 className='text-center text-dark font-weight-bold mb-5 pb-5'>My Recent Projects</h1>
        </div>
        <div className='row d-flex justify-content-around'>
            {
                projects.map(project => <Projects project={project} key={project.id}/>)
            }
        </div>
        <div className='more text-center'>
        <Link to='/projects' className='btn btn-outline-custom font-weight-bold text-white'>
            More Projects
        </Link>
        </div>
    </div>
       </div>

    );
};

export default ProjectGallery;