import React from 'react';
import {NavLink} from 'react-router-dom';


const Home = () => {

  return(
    <div class= "py-5 text-center app-header bg-image">
     <div class="hero-text">
     <h1>Hello! I'm Dyana.</h1>
    <p>And I'm a Photographer</p>

    {/*exact is so the home link doesn't stay active when navigate other pages. */}

    <NavLink to='/work' className="btn btn-outline-light mr-2">Work</NavLink>
    <NavLink to='/about' className="btn btn-outline-light mr-2">About</NavLink>
    <NavLink to='/contact' className="btn btn-outline-light mr-2">Contact</NavLink>
  </div>
  </div>
  )
}

export default Home;
