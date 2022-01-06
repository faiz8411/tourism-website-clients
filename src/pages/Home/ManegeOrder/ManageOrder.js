import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageOrder = () => {
    const { user } = useAuth()
    const [manageOrder, setManageOrder] = useState([])
    const [control, setControl] = useState(false)

    useEffect(() => {
        const url = `https://quiet-springs-89109.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setManageOrder(data))
    }, [user.email])
    const handleDelete = (id) => {
        alert('you want to delete')
        fetch(`https://quiet-springs-89109.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
        console.log(id);
    };
    return (
        <div>
            {
                manageOrder.map(pd => (<div className=' col-sm-12'>
                    <div className="service border border p-3 ">

                        <div className="row">
                            <div className="col-md-2">
                                <div className="images">
                                    <h6>view</h6>
                                    <img height="50px" width="80px" src={pd.image} alt="" />

                                </div>

                            </div>
                            <div className="col-md-4">
                                <h6>service name</h6>
                                <h6 className='description'>{pd.name}</h6>





                            </div>
                            <div className="col-md-2">
                                <h6>user email</h6>
                                <p className=' description-project'>{user.email}</p>
                            </div>
                            <div className="col-md-2">
                                <h6>price</h6>
                                <p className='text-danger'>price:${pd.price}</p>
                            </div>
                            <div className="col-md-2">
                                <h6>action</h6>
                                <button className='mt-0 bg-warning border-0 rounded' onClick={() => handleDelete(pd._id)}>delete</button>
                            </div>


                        </div>



                    </div>

                </div>
                ))
            }
        </div>
    );
};

export default ManageOrder;