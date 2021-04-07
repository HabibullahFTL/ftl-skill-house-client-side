import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import './Header.css';

const Header = (props) => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    const handleSignOut = ()=>{
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand text-primary" to="/">FTL Skill House</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/orders">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin-tools">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/details">Details</Link>
                        </li>
                        {
                            loginUserDetails.isSignIn && <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#destination" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Hi {loginUserDetails.name}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/"><i className="fas fa-user"></i> View Profile</Link></li>
                                <li><Link className="dropdown-item" to="/login" onClick={handleSignOut}><i className="fas fa-sign-in-alt"></i> Sign Out</Link></li>
                            </ul>
                        </li>
                        }
                        
                            {
                                !loginUserDetails.isSignIn && 
                                <li className="nav-item">
                                    <Link className="btn btn-primary" to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
                                </li>
                            }
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;