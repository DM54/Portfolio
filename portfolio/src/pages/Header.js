import React from 'react';
import {NavLink} from 'react-router-dom';
import Contact from './Contact';

const Header = () => {

  return(
    <div class= "bgheader">
    <NavLink to='/work' className="btn btn-outline-light ml-2 ">Work</NavLink>
    <NavLink to='/about' className="btn btn-outline-light ml-2">About</NavLink>
    <NavLink to='/contact' className="btn btn-outline-light ml-2">Contact</NavLink>
  </div>

  )
}

export default Header;

