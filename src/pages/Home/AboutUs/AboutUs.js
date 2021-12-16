import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='about-container mt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h4 className='aboutUs'>about us</h4>
                        <h2 className='about'>EXPLORE ALL THE CORNERS OF THE WORLD WITH US</h2>
                    </div>
                    <div className="col-md-6 about-column">
                        <p className='paragraph'><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, facere neque? Molestiae provident accusamus, ut consequatur aliquid numquam repudiandae quis ea, non reprehenderit minus! Consequatur eaque iure deserunt numquam repellendus.</small></p>
                        <button className='about-button'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;