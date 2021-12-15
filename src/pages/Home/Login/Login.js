import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
    };

    return (
        <div>
            <Row>
                <Col xs={12} md={6} className='mt-5'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input
                            style={{ width: '80%', margin: 20 }}
                            defaultValue="email"
                            {...register("email")}
                            type="email"
                            placeholder='email'
                        /> <br />
                        <input
                            style={{ width: '80%', margin: 10, borderBottom: '' }}
                            // defaultValue="password"
                            placeholder='password'
                            type="password"
                            {...register("password")} />
                        <br />

                        {/* include validation with required or other standard HTML validation rules */}

                        {/* {errors.exampleRequired && <span>This field is required</span>} */}

                        <input type="submit" value="login" className='bg-success rounded text-white border-0 p-4' />
                    </form>
                </Col>
                <Col xs={12} md={6}>
                    <img className="img-fluid image-about" src="https://i.ibb.co/QPvBk3p/Support1.png" alt="" />
                </Col>

            </Row>

        </div>
    );
};

export default Login;