import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'
import Typewriter from 'typewriter-effect'
import { HashLink } from 'react-router-hash-link';


const Navigation = () => {
    return (
        <div className='navigation-container'>
            <Navbar bg="white" variant="warning">
                <Container>
                    <Navbar.Brand href="#home">
                        Logo
                    </Navbar.Brand>

                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Dropdown className="me-auto">
                            <Dropdown.Toggle variant="" id="dropdown-basic" className='mx-auto'>
                                service
                            </Dropdown.Toggle>
                            {/* <Nav.Link as={HashLink} to="/home#home" className="text-white navbar">Home</Nav.Link> */}

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link as={HashLink} to="/features">Features</Nav.Link>
                        <Nav.Link as={HashLink} to="/pricing">Pricing</Nav.Link>
                        <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={HashLink} to="/login" className="bg-warning rounded">login</Nav.Link>
                    </Nav>
                </Container>

            </Navbar>
        </div>
    );
};

export default Navigation;