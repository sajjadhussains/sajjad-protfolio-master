import React, { useEffect } from 'react';
import './Intro.css'
import Typical from 'react-typical';
import introImage from '../../image/shuvo.jpg'
import resume from '../../image/Resume/sajjad.pdf'
import github from '../../image/github.png'
import fb from '../../image/fb.jpg'
import linkedin from '../../image/linkedin.png'
import Aos from "aos";
import "aos/dist/aos.css";

const Intro = () => {
    
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className="intro-section container mb-5 pb-5" data-aos="zoom-in">
            <div className='row d-flex justify-content-between align-items-center'>
                <div className="col-md-6 mb-5">
                    {/* <h3 className="">Hello, i am</h3> */}
                    <h1 className="name-color">Sajjad Hussain</h1>
                    <h3 className=" text2 developer mb-3">
                    Engineer | Programmer | Web Developer........
                        {/* <Typical
                            steps={[' Web Developer', 3000, ' Programmer', 3000, ' Tech Lover', 3000]}
                            loop={Infinity}
                            wrapper="b"
                        /> */}
                    </h3>

                    {/* social icons */}
                    <div className="icon d-flex pt-2">
                        <a href="https://github.com/sajjadhussains"
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <img src={github} alt="" />
                        </a>
                        <a href="https://www.facebook.com/sazzadhossain.shuvo.3/"
                            className="ml-3"
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <img src={fb} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/sajjad-hussain-0186281ba/"
                            className="ml-3"
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <img src={linkedin} alt="https://www.linkedin.com/in/sajjad-hussain-0186281ba/" />
                        </a>
                    </div>

                    <a href={resume} download="Sajjad Hussain CV"
                        className="btn btn-outline-danger button-danger font-weight-bold text-white mt-4"
                    >
                        Download Resume
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer"
                        className="btn btn-outline-danger font-weight-bold text-white mt-4 ml-3"
                    >
                        Hire Me
                    </a>

                </div>
                <div className="col-md-6">
                    <div className="intro-image">
                        <img className='intro-img text-white' src={introImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;