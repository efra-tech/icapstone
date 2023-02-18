import React from 'react';
import { NavLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

export default function NavBar(props) {

    const handleSignOut = (event) => {
      signOut(getAuth());
    }

    return (
        <div>
            <nav>
                <ul className="nav-bar">
                    <li className="nav-bar"><NavLink exact to="/" activeClassName="current">Home</NavLink></li>
                    <li className="nav-bar"><NavLink to="/popular/month" activeClassName="current">Popular</NavLink></li>
                    <li className="nav-bar"><NavLink to="/about" activeClassName="current">About</NavLink></li>
                    {!props.user &&
                        <li className="nav-bar signin"><NavLink to="/signinpage" activeClassName="current">Sign In</NavLink></li>
                    }
                    {props.user && <>
                        <li className="nav-bar"><NavLink to="/dashboard" activeClassName="current">Dashboard</NavLink></li>
                        <li className="nav-bar signout"><button className="btn btn-danger ms-2" onClick={handleSignOut}>Sign Out</button></li>
                    </>}
                </ul>
            </nav>
        </div>
    )
}