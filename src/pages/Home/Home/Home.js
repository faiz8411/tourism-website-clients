import React from 'react';
import Contact from '../../Contact/Contact';
import AboutUs from '../AboutUs/AboutUs';
import Carusel from '../Carusel/Carusel';
import Experience from '../Experience/Experience';
import Features from '../Features/Features';
import Navigation from '../Navigation/Navigation';
import Service from '../Service/Service';
// import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            {/* <Navigation></Navigation> */}
            <Carusel></Carusel>
            <AboutUs></AboutUs>
            <Features></Features>
            <Service></Service>
            <Contact></Contact>
            <Experience></Experience>
        </div>
    );
};

export default Home;