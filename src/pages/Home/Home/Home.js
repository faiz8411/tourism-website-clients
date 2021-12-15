import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Carusel from '../Carusel/Carusel';
import Features from '../Features/Features';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Carusel></Carusel>
            <AboutUs></AboutUs>
            <Features></Features>
        </div>
    );
};

export default Home;