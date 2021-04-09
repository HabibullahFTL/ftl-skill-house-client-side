import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Order from '../Order/Order';

const Orders = () => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    const [orders,setOrders] = useState();
    useEffect(()=>{
        fetch(`https://fathomless-meadow-17905.herokuapp.com/orders/?uid=${loginUserDetails.uid}`)
        .then(res=>res.json())
        .then(data=>{
            setOrders(data);
        })
    },[loginUserDetails.uid])
    return (
        <div className="container">
            <h3 className="my-3">Order History</h3>
            {
                orders?.map(order=><Order order={order} key={order._id}></Order>)
            }
        </div>
    );
};

export default Orders;