import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const AllCourses = () => {
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
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {allCourse.map(course => <Course course={course} key={course._id}></Course>)}
            </div>
        </div>

    );
};

export default AllCourses;