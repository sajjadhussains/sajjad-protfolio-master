import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './ProgressBar.css';

const ProgressBar = ({ done, title }) => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className="col-12 col-sm-12 col-md-6">
            <div data-aos="fade-up" className="backStyle">
                <div className="container1">
                    <div className='d-flex justify-content-between mb-2'>
                    <h5 className="titleStyle">{title}</h5>
                    <h5 className="progress">{done}%</h5>
                    </div>
                    <div className="progressbar-container">
                        <div className="progressbar-complete" style={{ width: `${done}%` }}>
                            <div className="progressbar-liquid"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;