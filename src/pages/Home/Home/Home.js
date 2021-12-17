import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Carusel from '../Carusel/Carusel';
import Experience from '../Experience/Experience';
import Features from '../Features/Features';
import Navigation from '../Navigation/Navigation';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <Carusel></Carusel>
            <AboutUs></AboutUs>
            <Features></Features>
            <Service></Service>
            <Experience></Experience>
        </div>
    );
};

export default Home;