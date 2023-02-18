import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute(props) {
    if (props.user) {
        return <Route {...props}/>
    } else if (props.user === undefined) {
        return null;
    } else {
        return <Redirect to="/signinpage" />
    }
}