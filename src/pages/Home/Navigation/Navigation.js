import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'
import Typewriter from 'typewriter-effect'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logout } = useAuth()
    return (
        <div className='navigation-container'>
            <Navbar bg="dark" variant="warning">
                <Container>
                    <Navbar.Brand href="#home">
                        Logo
                    </Navbar.Brand>

                    <Nav className="mx-auto">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        {/* <Dropdown className="me-auto">
                            <Dropdown.Toggle variant="" id="dropdown-basic" className='mx-auto'>
                                service
                            </Dropdown.Toggle>
                            

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                        <Nav.Link as={HashLink} to="/features">Features</Nav.Link>
                        {user?.email && <Nav.Link as={HashLink} to="/order">Order</Nav.Link>}
                        {user.email && <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>}
                        {user?.email ? <Nav.Link as={HashLink} to="/login" className="bg-warning rounded" onClick={logout}>logout</Nav.Link>
                            :
                            <Nav.Link as={HashLink} to="/login" className="bg-warning rounded">login</Nav.Link>}
                        <Navbar.Collapse className="justify-content-end ">
                            <Navbar.Text className="text-white ">
                                {user?.email &&
                                    <span className='dispalayName'> Welcome: {user.displayName}</span>}

                            </Navbar.Text>
                        </Navbar.Collapse>

                    </Nav>
                </Container>

            </Navbar>
            <div>
                <Navbar>
                    <Container>

                        <Navbar.Brand href="#home" className="m-2">

                        </Navbar.Brand>
                        <Navbar.Toggle />

                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Navigation;