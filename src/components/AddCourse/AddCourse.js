import React, { useContext, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { fileUploadHandle } from '../LogIn/LogInManager';
import { UserContext } from '../../App';

const AddCourse = () => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    const [courseInfo, setCourseInfo] = useState({
        isSuccess: false,
        courseTitle: '',
        courseInstructor: '',
        courseFee: 0,
        thumbnailDir: '',
        thumbnailFile: '',
        message: ''
    });
    const handleAddCourse = () => {
        const { courseTitle, courseInstructor, courseFee, thumbnailFile, thumbnailDir } = courseInfo;
        fileUploadHandle(thumbnailFile, thumbnailDir, { courseTitle, courseInstructor, courseFee })
            .then(data => {
                if (!data.message) {
                    const date = new Date();
                    // For sending data to database
                    const dbCourseInfo = { ...data,createdAt:date.toISOString() };
                    fetch('https://fathomless-meadow-17905.herokuapp.com/create-course', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(dbCourseInfo)
                    })
                    .then(response => response.json())
                    .then(courseData => {
                        if (!courseData.message) {
                            // For showing success aleart
                            const newCourseInfo = { ...courseInfo };
                            newCourseInfo.isSuccess = true;
                            setCourseInfo(newCourseInfo);
                            document.getElementById('course-title').value = "";
                            document.getElementById('course-fee').value = "";
                            document.getElementById('course-instructor').value = "";
                            document.getElementById('course-thumbnail').value = "";
                        }
                        })
                } else {
                    // For updating failed message
                    const newCourseInfo = { ...courseInfo };
                    newCourseInfo.message = data.message;
                    setCourseInfo(newCourseInfo);
                }
            })
    }

    // For handling OnChange State
    const handleOnChange = (e) => {
        if (e.target.id === 'course-title') {
            const newFileInfo = { ...courseInfo };
            newFileInfo.courseTitle = e.target.value;
            setCourseInfo(newFileInfo);
        }
        if (e.target.id === 'course-instructor') {
            const newFileInfo = { ...courseInfo };
            newFileInfo.courseInstructor = e.target.value;
            setCourseInfo(newFileInfo);
        }
        if (e.target.id === 'course-fee') {
            const newFileInfo = { ...courseInfo };
            newFileInfo.courseFee = e.target.value;
            setCourseInfo(newFileInfo);
        }
    }

    // For updating file information
    const handleFiles = (e) => {
        const date = new Date();
        const presentTime = date.getTime();
        const newFileInfo = { ...courseInfo };
        newFileInfo.thumbnailFile = e.target.files[0];
        newFileInfo.thumbnailDir = 'course-thumbnails/' + presentTime + '_' + e.target.files[0].name;
        setCourseInfo(newFileInfo);
    }

    return (
        <div className="admin-tools">
            <SideBar></SideBar>
            <div className="main-content">
                <h4 className="bg-light p-md-3 text-center">Add Product</h4>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                {
                                    courseInfo.message && !courseInfo.isSuccess && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                        {courseInfo.message}
                                    </div>
                                }
                                {
                                    courseInfo.isSuccess && <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        Course created successfully!
                                    </div>
                                }
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="course-title" className="form-label">Course Title</label>
                                    <input type="text" className="form-control" id="course-title" onChange={handleOnChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="course-fee" className="form-label">Course Fee</label>
                                    <input type="number" className="form-control" id="course-fee" onChange={handleOnChange} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="course-instructor" className="form-label">Instructor Name</label>
                                    <input type="text" className="form-control" id="course-instructor" onChange={handleOnChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="course-thumbnail" className="form-label">Upload Thumbnail</label>
                                    <input type="file" className="form-control" id="course-thumbnail" onChange={handleFiles} />
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary px-5 m-auto d-block" onClick={handleAddCourse}><i className="fas fa-plus"></i> Add Course</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;