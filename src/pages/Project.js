import React from 'react';
import project from '../data/project'
import Projects from '../components/Projects/Projects';
import Header from '../components/Header/Header';
import PartAnimation from '../components/Particles/PartAnimation';
import { useState } from 'react';

const Project = () => {
    const [projects, allProjects] = useState(project);
    return (
        <div>
            <Header />
            {/* <div style={{height: '0'}}>
            <PartAnimation/>
            </div> */}
            <div className="container mb-5">
                <div className='project-gallery-header-text pt-5'>
                    <h1 className='text-center text-white font-weight-bold mb-5 pb-5'>My Recent Projects</h1>
                </div>
                <div className='row d-flex justify-content-around'>
                    {
                        projects.map(project => <Projects project={project} key={project.id} />)
                    }
                </div>
            </div>
        </div>

    );
};

export default Project;