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
            <Image src={ mepic} alt="me"  roundedCircle style={{width:"90%", height: "95%"}}  ></Image>
            </div>
         </div>
         <div class="col-md">
         <br/>
           <h3 className="name">Dyana Monroy</h3><br/>
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
             Recently, I took 7th months NanoDegree Program - Udacity Scholarship Program Sponsored by Citi.
             I have completed about 5 projects in JavaScript and The DOM, Web APIs and Asynchronous Applications,
             Java Fundamentals, and Advanced Java Programming Techniques.
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
                February 2020 - April 2021
              </p>
             </div>
             <div className="col-sm-4">
             <h5 className="name">Software</h5>
             <p className="pcolorabout psize">
               <p  className="pcolorabout psize">
              Node.js -NPM, Netlify, Heroku, Eclipse, Linux, Git, and Visual Studio Code
               </p>
              </p>
             </div>
             <div className="col-sm-4">
             <h5 className="name">Methods and Languages </h5>
             <p className="pcolorabout psize">
               <p  className="pcolorabout psize">
               JavaScript, Java
               </p>
              </p>
             </div>
             <div className= "col-sm-4">
              <h5 className="name">Certification</h5>
               <p className="pcolorabout psize">
                 <strong>Build Wireframes and Low-Fidelity Prototypes Certificate</strong>
               <strong> Start the UX Design Process: Empathize, Define, and Ideate Certificate </strong>
                <br/>
                <strong> Foundations of User Experience (UX) Design Certificate </strong>
                <br/>
               <strong> ConnectWise Cyber Security Certificate</strong>
                <br/>
               <strong> PII Certificate</strong>
                <br/>
               <strong>Web Developer Certificate (Udemy)</strong>
               </p>
            </div>

         </div>
         <div className="row">

         </div>
   </div>

  )
}

export default About;
