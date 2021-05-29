import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {

  return(
    <div className="py-5 text-center app-header ">

     <div class="hero-text">
     <h1>Hello! I'm Dyana.</h1>
    <p>And I'm a Photographer</p>

    {/*exact is so the home link doesn't stay active when navigate other pages. */}
    <NavLink to='/work' exact className="btn btn-outline-primary mr-2">Work</NavLink>
    <a href="https://www.behance.net/dyanamonroy" className="btn btn-outline-primary mr-2">Behance</a>
    <NavLink to='/about' className="btn btn-outline-primary mr-2">About</NavLink>
    <NavLink to='/contact' className="btn btn-outline-primary mr-2">Contact</NavLink>

  </div>

  </div>
  )
}

export default Header;
