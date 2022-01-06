import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const form = useRef();
    // const onSubmit = data => {
    //     console.log(data)
    //     reset()
    // };
    const sendEmail = (e) => {


        emailjs.sendForm('service_y52o7jr', 'template_n6o99bj', e.target, 'user_TjnMJ4Kh1pbAUhNvEvLRG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        e.preventDefault();
    };
    return (
        <div className="about-container">
            {/* <h4 className="text-warning">About</h4> */}

            <Row>
                <Col xs={12} md={6}>
                    <img className="img-fluid image-about" src="https://i.ibb.co/f8dRLTP/3-days-fes-desert-trip-to-marrakech-1.jpg" alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <h4 className='text-contact'>contact with us</h4>
                    <form ref={form} onSubmit={sendEmail}>

                        <input className="contact" type="text" name="name" placeholder="name" />
                        <br />

                        <input className="contact" type="email" name="email" placeholder="email" />
                        <br />

                        <input className="contact" type="text" name="subject" placeholder="subject" />
                        <br />

                        <textarea className="contactText" name="message" placeholder="write massage" />
                        <br />
                        <input className="button-send" type="submit" value="Send" />
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;