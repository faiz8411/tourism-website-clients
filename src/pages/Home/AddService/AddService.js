import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
    };


    return (
        <div>
            <div>
                <h1 className="mt-5 text-center text-danger">Please Add Services</h1>
                <div className=" w-25 m-auto mt-5">
                    <div className="AdService-container ">
                        <div className="addService">
                            <form onSubmit={handleSubmit(onSubmit)} style={{ height: 300, m: 3 }}>
                                <input
                                    style={{ border: '2px solid green', }}
                                    {...register("name")}
                                    placeholder="Name"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <br />

                                <input
                                    style={{ border: '2px solid green' }}
                                    {...register("description")}
                                    placeholder="Description"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <br />
                                <input
                                    style={{ border: '2px solid green', m: 1 }}
                                    {...register("image", { required: true })}
                                    placeholder="Image Link"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <br />
                                <input
                                    style={{ border: '2px solid green', m: 2 }}
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    type="number"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <br />




                                <input
                                    style={{ width: '30%' }}
                                    type="submit"
                                    value="Add"
                                    className="btn btn-info w-50"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;