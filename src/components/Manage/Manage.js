import React, { useEffect, useState } from 'react';
import './Manage.css';
import { Link } from "react-router-dom";
import SideBar from '../SideBar/SideBar';

const AdminTools = () => {
    const [allCourse,setAllCourse] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/all-courses',{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setAllCourse(data);
        })
    },[])
    const deleteCourse = (id)=>{
        fetch(`http://localhost:3001/delete-course/?course_id=${id}`,{
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

export default AdminTools;