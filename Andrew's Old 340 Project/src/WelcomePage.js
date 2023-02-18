import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
    return (
        <div className="welcome">
            <h1>Welcome to Subscriptr!</h1>
            <p>Subscripter is a supscription tracking service that allows users to take control of their recurring media purchases. Users can input subscriptions they have, the amount of hours they use them for, and Subscriptr will produce dynamic comparative results that make it easier for you to decide if the subscription is worth it.</p>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4" align="center"><Link to="/signinpage" className="btn btn-primary" role="button">Try it out today!</Link></div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}