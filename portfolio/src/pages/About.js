import React from 'react';
import Header from './Header';
import mepic from '../images/me.jpg';
import Image from 'react-bootstrap/Image'
const About = () => {
  return (
    <div class="container">
       <Header></Header>

        <br/>
        <br/>
        <br/>
       <div class="row">
         <div class="column">
            <div class="stylepics">
            <Image src={ mepic} alt="me"  roundedCircle  ></Image>
            </div>
         </div>
         <div class="column">
           <h1 className="name">Dyana Monroy</h1>
           <p className="pcolorabout">
            Dyana is a developer / designer, passionate about
            creating applications and designs.
           </p>
           <p className="pcolorabout">

           </p>

         </div>
       </div>

   </div>

  )
}

export default About;
