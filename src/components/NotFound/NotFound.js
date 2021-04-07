import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <h3 className="text-danger nothing-icon"><i className="fas fa-ban"></i></h3>
            <h3 className="text-danger">Page Not Found</h3>
        </div>
    );
};

export default NotFound;