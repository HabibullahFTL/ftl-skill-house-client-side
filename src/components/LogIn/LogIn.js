import React, { useContext } from 'react';
import googleIcon from '../../img/google.svg';
import ghIcon from '../../img/github.svg';
import './Login.css';
import { ghSignIn, googleSignIn } from './LogInManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const LogIn = () => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGooleSignIn = () => {
        googleSignIn()
            .then(data => {
                if (data.errMessage) {
                    setLoginUserDetails({
                        ...loginUserDetails,
                        errMessage: data.errMessage
                    })
                } else {
                    setLoginUserDetails(data);
                    history.replace(from);
                }
            });
    }
    const handleGHSignIn = () => {
        ghSignIn()
            .then(data => {
                if (data.errMessage) {
                    setLoginUserDetails({
                        ...loginUserDetails,
                        errMessage: data.errMessage
                    })
                } else {
                    setLoginUserDetails(data);
                    history.replace(from);
                }
            });
    }


    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6 col-lg-5 m-auto">
                <div className="card my-4">
                    <div className="card-body">
                            {!loginUserDetails.isSignIn && <div className="text-center card-body">
                                <h3 className="mb-4">Login</h3>
                                <small style={{ color: 'red' }}>{loginUserDetails?.errMessage}</small>
                                <button className="social-login w-100 w-lg-75" onClick={handleGooleSignIn} >
                                    <img src={googleIcon} alt="" />
                                    <span>Continue with Google</span>
                                </button>
                                <button className="social-login w-100 w-lg-75" onClick={handleGHSignIn}>
                                    <img src={ghIcon} alt="" />
                                    <span>Continue with GitHub</span>
                                </button>
                            </div>}
                        </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default LogIn;