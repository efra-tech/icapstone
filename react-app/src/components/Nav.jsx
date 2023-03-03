import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className='navbar-expand-lg'>
      <div>
        <ul className="list-unstyled navbar-nav">
          <li className='nav-item m-3'><NavLink to="/home">Home</NavLink></li>
          <li className='nav-item m-3'><NavLink to="/map">Map</NavLink></li>
          <li className='nav-item m-3'><NavLink to="/events">Events</NavLink></li>
          <li className='nav-item m-3'><NavLink to="/bulletin">Bulletin</NavLink></li>
          <li className='nav-item m-3'><NavLink to="/about-us">About Us</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}