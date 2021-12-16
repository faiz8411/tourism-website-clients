import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const Registration = () => {
    const [loginData, SetLoginData] = useState({})
    const handleOnBlur = (e) => {
        const Field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[Field] = value
        SetLoginData(newLoginData)
        console.log(newLoginData)
        e.preventDefault()
    }
    const handleLoginSubmit = (e) => {
        // loginUser(loginData.email, loginData.password, location, navigate)
        if (loginData.password !== loginData.password2) {
            alert('password did not macth')
        }
        e.preventDefault()
    }
    return (
        <div>
            <Row>
                <Col xs={12} md={6} className='mt-5'>
                    <form onSubmit={handleLoginSubmit}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input
                            style={{ width: '80%', margin: 20 }}
                            // defaultValue="email"
                            onChange={handleOnBlur}
                            type="email"
                            name='email'
                            placeholder='email'
                        /> <br />
                        <input
                            style={{ width: '80%', margin: 10, borderBottom: '' }}
                            // defaultValue="password"
                            placeholder='password'
                            onChange={handleOnBlur}
                            name='password'
                            type="password" />

                        <br />
                        <input
                            style={{ width: '80%', margin: 10, borderBottom: '' }}
                            // defaultValue="password"
                            placeholder='password'
                            onChange={handleOnBlur}
                            name='password'
                            type="password" />

                        <br />

                        {/* include validation with required or other standard HTML validation rules */}

                        {/* {errors.exampleRequired && <span>This field is required</span>} */}

                        <input type="submit" value="register" onClick={handleLoginSubmit} className='bg-success rounded text-white border-0 p-4' />
                    </form>
                </Col>
                <Col xs={12} md={6}>
                    <img className="img-fluid image-about" src="https://i.ibb.co/QPvBk3p/Support1.png" alt="" />
                </Col>

            </Row>
        </div>
    );
};

export default Registration;