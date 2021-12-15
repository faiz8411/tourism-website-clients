import React from 'react';
import { Carousel, Dropdown } from 'react-bootstrap';
import './Carisel.css'


const Carusel = () => {
    return (
        <div className='carousel-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <h4>booke with us and book it <br />
                            <span className='text'> out of here</span> </h4>
                        <button className='p-2 button shadow-4 m-2 bg-success rounded text-white'>explore</button>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <img className='img-fluid small' src="https://i.ibb.co/vsrF86k/doctor.png" alt="" />
                        <div className='d-flex bg-white'>
                            <div className='m-3'>
                                <Dropdown className="me-auto">
                                    <Dropdown.Toggle variant="white" id="dropdown-basic" className='mx-auto'>
                                        location
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <h5>italia</h5>
                            </div>
                            <div className='m-3'>
                                <Dropdown className="me-auto">
                                    <Dropdown.Toggle variant="white" id="dropdown-basic" className='mx-auto'>
                                        date
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <h6>thu 12</h6>
                            </div>
                            <div className='m-3'>
                                <Dropdown className="me-auto">
                                    <Dropdown.Toggle variant="white" id="dropdown-basic" className='mx-auto'>
                                        location
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <h6>55000-45000</h6>
                            </div>
                            <div className='mt-3'>
                                <button className='bg-warning p-3 rounded text-white border-0'>search</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Carusel;