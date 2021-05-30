import React from 'react';
import {NavLink} from 'react-router-dom';
import Contact from './Contact';
import Nav from 'react-bootstrap/Nav'

const Header = () => {

  return(
    <div className= "topnav">

    <NavLink to='/' exact className="homelogo" ></NavLink>
    <Nav className="justify-content-end">
    <NavLink to='/work' className="btn btn-outline-light ml-2 ">Work</NavLink>
    <NavLink to='/about' className="btn btn-outline-light ml-2">About</NavLink>
    <NavLink to='/contact' className="btn btn-outline-light ml-2">Contact</NavLink>
    </Nav>
  </div>


  )
}

export default Header;

