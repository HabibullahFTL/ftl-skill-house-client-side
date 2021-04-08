import React from 'react';

const Order = (props) => {
    const {order} = props;
    const {_id,courseTitle,courseFee,paymentStatus,orderedAt} = order;
    const strToDate = (str) =>{
        let monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let time = new Date(str);
        let year = time.getFullYear();
        let month = time.getMonth();
        let date = time.getDate();
        let hour = time.getHours();
        let minute = time.getMinutes();
        return `${date}-${monthList[month]}-${year} ${hour}:${minute}`
    }
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5>{courseTitle}</h5>
                <div className="row">
                    <div className="col-6">
                        <p className="mb-1"><b>Transaction ID: </b> {_id}</p>
                        <p className="mb-1"><b>Ordered At: </b> {strToDate(orderedAt)} </p>
                        <p className="mb-1"><b>Discount Code: </b> ---</p>
                    </div>
                    <div className="col-6">
                        <p className="mb-2"><b>Course Fee: </b> <span className="badge rounded-pill bg-primary text-lg">${courseFee}</span></p>
                        <p className="mb-1"><b>Payment Status: </b> <span className="badge rounded-pill bg-success text-lg">{paymentStatus}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;