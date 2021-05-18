import React, { useEffect, useState } from 'react';
import allSkills from '../../data/allSkills';
import ProgressBar from '../ProgressBar/ProgressBar';

const Skills = () => {
    const [getSkill, setGetSkill] = useState([]);
    const [webStyle, setWebStyle] = useState(true);
    const [progStyle, setProgStyle] = useState(false);
    const [toolsStyle, setToolsStyle] = useState(false);
    const [allSkill, setAllSkill] = useState(allSkills)

    useEffect(() => {
        const specificSkill = allSkill.filter(skill => skill.skillType === 'web');
        setGetSkill(specificSkill);

    }, [])

    const handleWeb = () => {
        const specificSkill = allSkill.filter(skill => skill.skillType === 'web');
        setGetSkill(specificSkill);

        setWebStyle(true);
        setProgStyle(false);
        setToolsStyle(false);

    }

    const handleProgramming = () => {
        const specificSkill = allSkill.filter(skill => skill.skillType === 'programming');
        setGetSkill(specificSkill);

        setWebStyle(false);
        setProgStyle(true);
        setToolsStyle(false);
    }

    const handleTools = () => {
        const specificSkill = allSkill.filter(skill => skill.skillType === 'tools');
        setGetSkill(specificSkill);

        setWebStyle(false);
        setProgStyle(false);
        setToolsStyle(true);
    }

    return (
        <div id="skill-section"
            className="container skill pt-5 mt-5 mb-5 pb-5"
            style={
                {
                    position: 'relative'
                }
            }
        >
            <div className="skills-header">
                <h1 className="text-dark font-weight-bold text-center mt-5 pt-3 pb-3">My Skills</h1>
            </div>

            <div className='d-flex justify-content-center mb-5'>
                <button
                    onClick={handleWeb}
                    className={
                        webStyle ?
                            "btn btn-outline-custom font-weight-bold btn-danger my-2 my-sm-0 btn-style mr-3"
                            : "btn btn-outline-danger  my-2 my-sm-0 btn-style mr-3"
                    }
                >
                    Web
                </button>
                <button
                    onClick={handleProgramming}
                    className={
                        progStyle ?
                            "btn btn-outline-danger font-weight-bold btn-danger my-2 my-sm-0 btn-style mr-3"
                            : "btn btn-outline-danger  my-2 my-sm-0 btn-style mr-3"
                    }
                >
                    Programming
                    </button>
                <button
                    onClick={handleTools}
                    className={
                        toolsStyle ?
                            "btn btn-outline-danger font-weight-bold btn-danger my-2 my-sm-0 btn-style mr-3"
                            : "btn btn-outline-danger my-2 my-sm-0 btn-style mr-3"
                    }
                >
                    Tools
                    </button>
            </div>

            <div className="row">
                {
                    getSkill.map(skill => <ProgressBar key={skill.id} done={skill.expertLevel} title={skill.skill}></ProgressBar>)
                }
            </div>
        </div>
    );
};

export default Skills;