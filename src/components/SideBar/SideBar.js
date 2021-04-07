import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Link } from "react-router-dom";

const SideBar = () => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    const handleSignOut = () => {
        setLoginUserDetails({
            isSignIn: false,
            name: '',
            email: '',
            photo: '',
            uid: null,
            errMessage: ''
        })
    }
    return (
        <div className="sidebar bg-dark">

            <h4 className="brand-name p-md-3 text-white text-center"><Link to="/" className="text-decoration-none text-white">FTL Skill House</Link></h4>

            <ul className="sidebar-menu">
                <li><Link to="/admin-tools" className="sidebar-link"><i className="far fa-window-restore"></i> Manage Course</Link></li>
                <li><Link to="/add-course" className="sidebar-link"><i className="fas fa-plus"></i> Add Course</Link></li>
                <li><Link to="/edit-course" className="sidebar-link"><i className="fas fa-edit"></i> Edit Course</Link></li>
                <li><Link className="sidebar-link" to="/login" onClick={handleSignOut}><i className="fas fa-sign-in-alt"></i> Sign Out</Link></li>
            </ul>
        </div>
    );
};

export default SideBar;