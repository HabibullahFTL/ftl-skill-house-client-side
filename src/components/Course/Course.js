import React from 'react';
import img from '../../img/product.jpg';
import { Link } from "react-router-dom";

const Course = (props) => {
    const {course} = props;
    const {_id,uid,courseTitle,courseFee,courseInstructor,photo} = course;
    return (
        <div className="col">
            <div className="card h-100 rounded border-0 shadow">
                <img src={photo} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="text-center">{courseTitle}</h5>
                </div>
                <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center my-3">
                    <h5>${courseFee}</h5>
                    <Link to={"/check-out/"+_id} className="btn btn-primary px-4"><i className="fas fa-shopping-cart"></i> Enroll</Link>
                </div>
            </div>
        </div>
    );
};

export default Course;