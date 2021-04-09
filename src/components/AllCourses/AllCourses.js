import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const AllCourses = () => {
    const [allCourse,setAllCourse] = useState([]);
    useEffect(()=>{
        fetch('https://fathomless-meadow-17905.herokuapp.com/all-courses')
        .then(res=>res.json())
        .then(data=>{
            setAllCourse(data);
        })
    },[])
    return (
        <div className="container">
            {
                allCourse.length !== 0 ? 
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        {allCourse.map(course => <Course course={course} key={course._id}></Course>)}
                    </div>
                    :<div className="py-5 d-flex justify-content-center align-items-center">
                        <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
            }
        </div>

    );
};

export default AllCourses;