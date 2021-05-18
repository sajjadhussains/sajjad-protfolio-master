import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import anik from '../../image/shuvo.jpg'
import './About.css'

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div id="about-section" className="container about mt-5 pt-5 mb-5">
            <h1 className="d-flex align-items-center font-weight-bold mb-5 pb-3 justify-content-center">About Me</h1>
            <div className="row d-flex align-items-center justify-content-around">
                <div data-aos="slide-up" className="col-md-4 img-size">
                    <img
                        style={
                            {
                                borderRadius: '5%',
                                margin: '0 auto',
                                display: 'block'
                            }
                        }
                        className="mb-3"
                        src={anik} height='270px'
                        alt="Anik Sarker" />
                </div>
                <div data-aos="slide-up" className="col-md-5 about-mySelf" >
                    <p className="">Hello, I’m Sajjad, a tech enthusiast person. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I’m currently studying Electronics and Communication Engineering (5th Semester) in Hajee Mohammad Danesh Science and Techonology University,Dinajpur. </p>
                    <a href="https://github.com/sajjadhussains" className="btn btn-outline-custom text-white my-2 my-sm-0 btn-style">Github</a>
                    <a href="#skill-section"><button className="btn btn-outline-custom text-white my-2 my-sm-0 btn-style ml-3">My Skill</button></a>
                </div>
            </div>
        </div>
    );
};

export default About;
