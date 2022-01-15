import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Details.css'

const Details = () => {
    const [details, setDetails] = useState({})
    const { user } = useAuth()
    const { serviceId } = useParams()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        alert('your order successfully added in my order')
        data.status = "pending"
        console.log(data)
        fetch("https://quiet-springs-89109.herokuapp.com/confirmOrder", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        reset()
    };

    useEffect(() => {
        fetch(`https://quiet-springs-89109.herokuapp.com/singleProduct/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [serviceId])
    return (
        <>
            <div className='details-container'>
                <h4>information about :{details.name}</h4>
                <div className="row">
                    <div className="col-md-4">
                        <img className='img-fluid' src={details.photo
                        } alt="" />
                    </div>
                    <div className="col-md-4">
                        <h6 className='location text-primary'>location</h6>
                        <p className='location'>{details.description}</p>
                    </div>
                    <div className="col-md-4">

                        <form onSubmit={handleSubmit(onSubmit)} style={{ height: 300, m: 3 }}>
                            {details.name && <input
                                style={{}}
                                {...register("name")}
                                placeholder="Name"
                                defaultValue={details.name}
                                className="p-2 m-2 w-100 input-field"

                            />}
                            <br />
                            {user?.email && <input
                                style={{}}
                                {...register("email")}
                                defaultValue={user.email}
                                placeholder="email"
                                className="p-2 m-2 w-100 input-field"
                            />}
                            <br />
                            {details.details && <input
                                style={{}}
                                {...register("details")}
                                placeholder="description"
                                defaultValue={details.details}
                                className="p-2 m-2 w-100 input-field"

                            />}
                            <br />
                            <input
                                style={{ m: 2 }}
                                {...register("number",)}
                                placeholder="mobile number"
                                type="number"
                                className="p-2 m-2 w-100 input-field"
                                required
                            />
                            <br />
                            <input
                                style={{ m: 2 }}
                                {...register("date",)}
                                placeholder="mobile number"
                                type="date"
                                className="p-2 m-2 w-100 input-field"
                                required
                            />
                            <br />


                            {details.image && < input
                                style={{ m: 1 }}
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2 w-100 input-field"
                                defaultValue={details.image}
                            />}
                            <br />



                            {details.price && <input
                                style={{ m: 2 }}
                                {...register("price", { required: true })}
                                placeholder="Price"
                                type="number"
                                className="p-2 m-2 w-100 input-field"
                                defaultValue={details.price}
                            />}
                            <br />




                            <input
                                style={{ width: '30%' }}
                                type="submit"
                                value="confirm"
                                className="btn btn-info w-50"
                            />
                        </form>
                    </div>
                </div>


            </div>
            <div>
                <div className='details-container'>
                    <div className="row">
                        <div className="col-md-4">
                            <img className='img-fluid' src={details.picture
                            } alt="" />
                        </div>
                        <div className="col-md-4">
                            <h6 className='text-primary'>More Information</h6>
                            <p className='location '>{details.details}</p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Details;