import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

const CheckOut = () => {
    const { _id } = useParams();
    const [course, setCourse] = useState({});
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    useEffect(() => {
        fetch(`https://fathomless-meadow-17905.herokuapp.com/course/?course_id=${_id}`)
            .then(res => res.json())
            .then(data => {
                setCourse(data);
            })
    }, [_id])


    const confirmOrder = () => {
        const date = new Date();
        const {_id,courseFee,courseTitle} = course;
        const orderedCourse = {
            courseId: _id,
            courseFee,
            courseTitle,
            count:1,
            paymentStatus: "Paid",
            uid:loginUserDetails.uid,
            orderedAt: date.toISOString()
        }
        fetch('https://fathomless-meadow-17905.herokuapp.com/add-order', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderedCourse)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return (
        <div className="container mt-2">
            <h3>Check Out</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Course Image</th>
                        <th scope="col">Course Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Course Fee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <img src={course.photo} style={{ width: "120px" }} alt="" />
                        </th>
                        <th scope="row">{course.courseTitle}</th>
                        <td>1</td>
                        <td>${course.courseFee}</td>
                    </tr>
                    <tr>
                        <th scope="row" colSpan="3" className="text-end">Total</th>
                        <th>${course.courseFee}</th>
                    </tr>
                </tbody>
            </table>
            <Link className="btn btn-primary ms-auto d-block px-5" to="/orders" onClick={confirmOrder}><i className="fas fa-shopping-cart"></i> Check Out</Link>
        </div>
    );
};

export default CheckOut;