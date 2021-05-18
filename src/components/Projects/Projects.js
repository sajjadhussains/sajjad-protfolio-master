import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import './Projects.css'

const Projects = ({ project }) => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div data-aos="zoom-out-down" className="col-md-5">
            <div className='custom-card mb-5'>
                <div className='custom-card-img mb-3'>
                    <img src={project.ui} alt="" />
                </div>
                <h4 className="card-title text-dark">
                    {project.name}
                </h4>
                <h6 className='card-desc text-primary mb-4'>
                    {project.description}
                </h6>
                <a href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link text-white btn btn-outline-custom"
                >
                    Github
                </a>
                <a href={project.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-site-link text-white btn btn-outline-custom ml-3"
                >
                    Live Site
                </a>
            </div>
        </div>
    );
};

export default Projects;