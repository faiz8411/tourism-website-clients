import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch(`https://quiet-springs-89109.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

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
        <div className='order-container'>
            <div className="row container">

                {
                    orders.map(pd => (<div className=' col-sm-12'>
                        <div className="service border border p-3 ">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images">
                                        <img className='img-fluid' src={pd.image} alt="" />

                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <h6 className='description'>{pd.name}</h6>

                                    <p className=' description-project'>{pd.description}</p>
                                    <h4 className='price'>price:${pd.price}</h4>
                                    <p>{pd.details}</p>
                                    <button className='mt-5' onClick={() => handleDelete(pd._id)}>delete order</button>
                                </div>


                            </div>



                        </div>

                    </div>
                    ))
                }

            </div>

        </div>
    );
};

export default MyOrder;