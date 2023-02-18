import React from 'react';
import { Link } from 'react-router-dom';

export default function Success(props) {
    return (
        <div className="welcome">
            <p>Your subscription was successfully added!</p>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4" align="center"><Link to="/dashboard" className="btn btn-primary" role="button">Back to Dashboard</Link></div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}