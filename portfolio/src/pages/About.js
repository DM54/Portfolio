import React from 'react';
import Header from './Header';
import mepic from '../images/me.jpg';
const About = () => {
  return (
    <div class="container">
       <Header></Header>

       <div class="row">
         <div class="column">
            <img src={ mepic} alt="me"></img>
         </div>
         <div class="column">

         </div>
       </div>

   </div>

  )
}

export default About;
