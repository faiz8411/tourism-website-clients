import React from 'react';
import { Carousel, Dropdown } from 'react-bootstrap';
import './Carisel.css'


const Carusel = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 h-80"
                    src="https://i.ibb.co/XZWmp9L/5cd9522593a1526fee255ea4.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100 h-80"
                    src="https://i.ibb.co/ZcwDSyQ/3-days-fes-desert-trip-to-marrakech-1.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Sahara Desert</h3>
                    <p>This is a list of the largest deserts in the world by area.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-80"
                    src="https://i.ibb.co/rQFmb0Q/leka3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carusel;