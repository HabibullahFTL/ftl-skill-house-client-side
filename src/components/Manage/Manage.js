import React, { useEffect, useState } from 'react';
import './Manage.css';
import { Link } from "react-router-dom";
import SideBar from '../SideBar/SideBar';

const Manage = () => {
    const [allCourse,setAllCourse] = useState([]);
    useEffect(()=>{
        fetch('https://fathomless-meadow-17905.herokuapp.com/all-courses')
        .then(res=>res.json())
        .then(data=>{
            setAllCourse(data);
        })
    },[])
    const deleteCourse = (id)=>{
        fetch(`https://fathomless-meadow-17905.herokuapp.com/delete-course/?course_id=${id}`,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if (data) {
                const newCourses = allCourse.filter(course=>course._id !== id);
                setAllCourse(newCourses);
            }
        })
    }
    return (
        <div className="admin-tools">
            <SideBar></SideBar>
            <div className="main-content">
                <h4 className="bg-light p-md-3 text-center">Product Mangement</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Course Name</th>
                            <th scope="col">Instructor</th>
                            <th scope="col">Course Fee</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCourse.map(course=>{
                                return(
                                    <tr key={course._id}>
                                        <th scope="row">{course.courseTitle}</th>
                                        <td>{course.courseInstructor}</td>
                                        <td>${course.courseFee}</td>
                                        <td>
                                            <Link to="/edit-course" className="btn btn-success me-2 mb-2"><i className="fas fa-edit"></i></Link>
                                            <button className="btn btn-danger me-2 mb-2" onClick={()=>deleteCourse(course._id)}><i className="fas fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manage;