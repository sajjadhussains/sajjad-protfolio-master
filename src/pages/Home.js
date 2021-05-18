import React from 'react';
import About from '../components/About/About';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import PartAnimation from '../components/Particles/PartAnimation';
import ProjectGallery from '../components/ProjectGallery/ProjectGallery';
import Skills from '../components/Skills/Skills';

const Home = () => {
    return (
        <>
            {/* <div style={{ height: '0' }}>
                <PartAnimation />
            </div> */}
            
            <div style={{ minHeight: '600px',backgroundColor: '#343A40', clipPath: 'polygon(100% 0, 100% 88%, 66% 91%, 0 100%, 0 0)'}}>
            <Header />
            <Intro />
            </div>
            
            {/* <div style={{ height: '0' }}>
                <PartAnimation />
            </div> */}
            
            <About />
            {/* <div style={{ height: '0' }}>
                <PartAnimation />
            </div> */}
            <Skills />
            
            {/* <div style={{ height: '0' }}>
                <PartAnimation />
            </div> */}
            
            <ProjectGallery />
            
            {/* <div style={{ height: '100px' }}>
                <PartAnimation />
            </div> */}
            
            <ContactForm />
            <Footer />
        </>
    );
};

export default Home;