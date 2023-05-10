import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../imgs/logo.png'

export default function Navbar(props) {

  return (
    <nav className='navbar-expand-lg navbar-nav'>
      <div>
        <ul className="list-unstyled navbar-nav">
          <li><img src={logo} alt="gardenspace logo" height={129} className='px-2' style={{}}/></li>
          <li id='nav-item-1' className='nav-item m-4'><NavLink to="/home"> Home </NavLink></li>
          <li className='nav-item m-4'><NavLink to="/map"> Map </NavLink></li>
          <li className='nav-item m-4'><NavLink to="/get-involved"> Get Involved </NavLink></li>
          <li className='nav-item m-4'><NavLink to="/about-us"> About Us </NavLink></li>
        </ul>
      </div>

      <a className="navbar-brand" href="/home">GardenSpace</a>
    </nav>
  );
}