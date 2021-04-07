import React from 'react';

const Orders = () => {
    return (
        <div className="container">
            <h3 className="my-3">Order History</h3>
            <div className="card mb-3">
                <div className="card-body">
                    <h5>UX/UI Design Course</h5>
                    <div className="row">
                        <div className="col-6">
                            <p className="mb-1"><b>Transaction ID: </b> 4654656878</p>
                            <p className="mb-1"><b>Discount Code: </b> ---</p>
                        </div>
                        <div className="col-6">
                            <p className="mb-2"><b>Course Fee: </b> <span className="badge rounded-pill bg-primary text-lg">$200</span></p>
                            <p className="mb-1"><b>Payment Status: </b> <span className="badge rounded-pill bg-success text-lg">Success</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;