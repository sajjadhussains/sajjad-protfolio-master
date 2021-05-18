import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div className="header-section">
            <nav class="navbar navbar-expand-lg navbar-light container mt-3 mb-5 pb-5">
            <Link to='/' class="navbar-brand">
                <span style={{height:'60px'}} className="text-white">Sajjad Hussain</span>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                    <Link to='/' class="nav-link text-white font-weight-bold px-3">Home</Link>
                    <a href='/#skill-section' class="nav-link text-white font-weight-bold px-3">Skills</a>
                    <Link to='/projects' class="nav-link text-white font-weight-bold px-3">Projects</Link>
                    <a href='/#contact-section' class="nav-link text-white font-weight-bold px-3">Contact</a>
                    <Link to='/blog' class="nav-link text-white font-weight-bold px-3">Blogs</Link>
                    <a href='https://docs.google.com/document/d/1QRd6JB-2ii963-B8PGzPvY8ADAFffH6odlosPdsVxoI/edit?usp=sharing' target='_blank' rel="noreferrer" class="nav-link font-weight-bold ml-3 px-3 btn btn-outline-danger text-white button-danger">Resume</a>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Header;