import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import {
    BrowserRouter as Router,
    Outlet,
    Link,


} from "react-router-dom";
import './Dashboard.css'
const Dashboard = () => {

    const { user, logOut } = useAuth();
    return (
        <div className='dashboard'>
            <div className='row'>
                <div className="col-md-2">
                    <Navbar bg="light" expand={false} >
                        <h3 className="text-danger">Click here</h3>
                        <Container fluid>

                            <Navbar.Toggle aria-controls="offcanvasNavbar" />
                            <Navbar.Offcanvas
                                id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel"
                                placement="start"
                            >

                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id="offcanvasNavbarLabel">{user.displayName}</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                                        <Nav.Link as={HashLink} to={`/dashboard/manageOrder`}>My Order</Nav.Link>
                                        <Nav.Link as={HashLink} to={`/dashboard/payment`}>Pay</Nav.Link>
                                        <Nav.Link as={HashLink} to={`/dashboard/AllServiceManage`}>All service</Nav.Link>
                                        <Nav.Link as={HashLink} to={`/dashboard/MakeAdmin`}>Make admin</Nav.Link>
                                        <Nav.Link as={HashLink} to={`/dashboard/makeSuper`}>Make super admin</Nav.Link>

                                        {user?.email ?
                                            <Nav.Link as={HashLink} onClick={logOut} to="/logout">Logout</Nav.Link>
                                            : <></>}

                                    </Nav>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                </div>
                <div className="col-md-8">
                    <Outlet></Outlet>
                </div>


            </div>
            <div className="right-side-image">
                <img className='img-fluid' src="https://i.ibb.co/THXn30V/dash.png" alt="" />

            </div>
        </div>
    );
};

export default Dashboard;