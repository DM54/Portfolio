import React from 'react';
import Header from './Header';
import travelsitepic from '../images/Capture.PNG';
import travelsitepic2 from '../images/Capture2.PNG';
import travelsitepic3 from '../images/Capture3.PNG';
import travelsitepic4 from '../images/Capture4.PNG';

const Travelsite = () => {
  return (
    <div class="container">
           <Header></Header>

                <br/>
              <h3 className="name">Travel Site</h3>
              <hr/>
              <div className="styles">
              <img src={travelsitepic} alt="travelsitepic" height="250px"  ></img>
              </div>
                <p className="pcolorabout psize styles">
                This is a travel agency website taught by two mentors <em>Brad Schiff</em> and <em>John Doe</em>. <br/>
                 Dedication of completing this course, I was able to finish building the website in 15 hours.
                 Earn a certificate called "Mastering the Modern Workflow".
                 Most of my work process is in my GitHub account and <a href="https://github.com/DM54/Travel-Site" target="_blank" rel="noreferrer" >can be view here</a>.
                 <br/>
                 The website - <a href="https://pedantic-kalam-009989.netlify.app/" target="_blank" rel="noreferrer" >Travel-Site</a>
                </p>
                <p className="pcolorabout psize styles" >
                <div className="row">
                  <div className="col-sm-4">
                  <p className="pcolorabout psize styles" >
                     Date <br/>
                     November 2019
                  </p>
                  </div>
                  <div className="col-sm-4">
                  <p className="pcolorabout psize styles" >
                     Role <br/>
                    From Scratch to Launch,
                    Developing and Design
                  </p>
                  </div>
                  <div className="col-sm-4">
                  <p className="pcolorabout psize styles" >
                     Skills <br/>
                     Object-Oriented JavaScript, ES6, Webpack, Node.js, NPM, BEM, and HTML5/CSS
                  </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                  <img src={travelsitepic4} alt="travelsitepic" height="200px"  ></img>
                  </div>
                  <div className="col-sm-4">
                  <img src={travelsitepic2} alt="travelsitepic" height="200px"  ></img>
                  </div>
                  <div className="col-sm-4">
                  <img src={travelsitepic3} alt="travelsitepic" height="200px"  ></img>
                  </div>
                </div>

                </p>
                </div>








  )
}

export default Travelsite;
