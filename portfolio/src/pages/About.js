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
         <br/>
           <h1 className="name">Dyana Monroy</h1><br/>
           <h5 className="pcolorabout">
            Dyana is a developer / designer, passionate about
            creating applications and designs.
           </h5> <br/>
           <p className="pcolorabout">
            Hi!, I'm a web developer and designer.
            I was born and raised in Brooklyn, NY and
            have been around computers for most of my life.
           </p>
           <p className="pcolorabout">
             I was intern at CMIT Solutions of Tribeca and my
             responsibilities were Web development, Email Marketing,
             Social Media Marketing, and SEO.
           </p>
            <p className="pcolorabout">
              Recently, I'm interested in UX Design, joined a program offered by Google.
              I'm interested in User Research, Production Design, and Visual Design.
            </p>
            <p className="pcolorabout">
              When I'm not developing / designing, I take my time practicing photography,
              and interested in Archery and Badminton.
            </p>


         </div>

       </div>
       <br/>
         <hr/>
           <div className="row">
           <div className="col-sm-4">
            <h5 className="name">Education</h5>
              <p className="pcolorabout psize">
                Hofstra University
              </p>
              <p  className="pcolorabout psize" >
                Bachelor of Arts, Computer Science
                <br/>
                September 2015 - May 2019
              </p>
           </div>
           <div className="col-sm-4">
           <h5 className="name">Experience</h5>
           <p className="pcolorabout psize ">
                CMIT Solutions of Tribeca
              </p>
              <p  className="pcolorabout psize" >
                Web Development Intern
              <br/>
                Feb 2020 - April 2021
              </p>
             </div>
             <div className="col-sm-4">
             <h5 className="name">Technical Skills</h5>
             <div className="row">
             <div className="col-md">
             <p className="pcolorabout psize">
             Languages
               <p  className="pcolorabout psize">
               JavaScript, React, Java, C/C++, Python,
               HTML5,CSS3, SASS
               </p>
              </p>
              </div>
              <div className="col-md">
             <p className="pcolorabout psize">
             Software
             <p className="pcolorabout psize">
             Node.js, Webpack, Babel, NPM,
             Netlify, Heroku, Adobe Photoshop, Eclipse,
             Linux, Git
             </p>
              </p>
              </div>

              </div>
             </div>
         </div>
   </div>

  )
}

export default About;
