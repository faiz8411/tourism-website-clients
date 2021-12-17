import React from 'react';
import './Experience.css'

const Experience = () => {
    return (
        <div className='experience'>
            <div className="row">
                <div className="col-md-6 col-sm-12 mt-5">
                    <div className='blog'>
                        <h5>our experience</h5>
                        <h3 className='blog-h3'>with our experience <br /> we will serve you</h3>
                        <p className='blog-paragraph'>What does an Australian family with no Thanksgiving tradition or extended family around them in Raleigh choose to do over the holiday break?How does a log cabin sound with spectacular mountain views where we can relax and explore a little of the Boone area.</p>
                        <button className='about-button'>learn more</button>
                        <div className="row mt-2">
                            <div className="col-md-4">
                                <h1>20</h1>
                                <h5 className='years'>years <br /> experience</h5>
                            </div>
                            <div className="col-md-4">
                                <h1>65</h1>
                                <h5 className='years'>destination <br /> colluboration</h5>
                            </div>
                            <div className="col-md-4">
                                <h1>500+</h1>
                                <h5 className='years'>tourist <br /> destination</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 image-blg">
                    {/* <img className='img-fluid' src="https://i.ibb.co/m6pH2zn/images-jfif-1.jpg" alt="" /> */}
                    <p className='blog-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil atque facilis iusto provident, voluptas, eos mollitia possimus aliquam, optio earum beatae temporibus eveniet voluptate laborum dolores minus quae maiores perspiciatis.</p>
                </div>
            </div>

        </div>
    );
};

export default Experience;