import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const AllServiceManage = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);
    // const { register, handleSubmit } = useForm();
    const [control, setControl] = useState(false)

    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");
    const handleStatus = e => {
        setStatus(e.target.value)
    }
    console.log(status)

    console.log(status);
    useEffect(() => {
        fetch(`http://localhost:5000/allOrders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);
    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        console.log(id);
    };

    const handleDelete = (id) => {
        alert('you want to delete')
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
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
            <h4>all orders</h4>
            {
                orders.map(pd => (<div className=' col-sm-12'>
                    <div className="service border border p-3 ">

                        <div className="row">
                            <div className="col-md-2">
                                <div className="images">
                                    <h6>view</h6>
                                    <img height="50px" width="80px" src={pd.image} alt="" />

                                </div>

                            </div>
                            <div className="col-md-2">
                                <h6>service name</h6>
                                <h6 className='description'>{pd.name}</h6>





                            </div>
                            <div className="col-md-2">
                                <h6>user email</h6>
                                <p className=' description-project'>{pd.email}</p>
                            </div>
                            <div className="col-md-2">
                                <h6>price</h6>
                                <p className='text-danger'>price:${pd.price}</p>
                            </div>
                            <div className="col-md-2">
                                <h6>action</h6>
                                <button className='mt-0 bg-warning border-0 rounded' onClick={() => handleDelete(pd._id)}>delete</button>
                                <button className='mt-1 bg-warning border-0 rounded' onClick={() => handleUpdate(pd._id)}>update</button>
                            </div>
                            <div className="col-md-2">
                                <h6>status</h6>
                                <input type="text" defaultValue={pd.status} onChange={handleStatus} width="60px" />
                            </div>


                        </div>



                    </div>

                </div>
                ))
            }
        </div>
    );
};

export default AllServiceManage;