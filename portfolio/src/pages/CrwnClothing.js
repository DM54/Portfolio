import React from 'react';
import Header from './Header';
import crwnpic from '../images/crwn-clothing/Crwn.PNG';
import crwnpic2 from '../images/crwn-clothing/Crwn2.PNG';
import crwnpic3 from '../images/crwn-clothing/Crwn3.PNG';
import crwnpic4 from '../images/crwn-clothing/Crwn4.PNG';

const CrwnClothing = () => {
  return (
    <div class="container">
           <Header></Header>

                <br/>
              <h3 className="name">Crwn Clothing</h3>
              <hr/>
              <div className="styles">
              <img src={crwnpic} alt="crwnpic"  style={{width:"100%"}}></img>
              </div>
              <div className="row">

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
                     Object-Oriented JavaScript, ES6, React, Node.js, NPM, Firebase and HTML5/CSS3
                  </p>
                  </div>
                </div>

                <p className="pcolorabout psize styles" >


                  <div className="row">
                  <div className="col-md-6">
                  <img src={crwnpic4} alt="crwnpic"  style={{width:"100%"}}></img>
                  </div>
                   <div className="col-md-6">
                   <p className="pcolorabout psize styles">
                     <br/>
                This is a E-commerce app taught by mentor <em>Andrei Neagoie</em>, <em>Senior Software Developer</em>. <br/>

                 Most of my work process is in my GitHub account and <a href="https://github.com/DM54/crwn-clothing" target="_blank" rel="noreferrer" >can be view here</a>.
                 <br/>
                 The website - <a href="https://crwnc1-live.herokuapp.com/" target="_blank" rel="noreferrer" >Crwn-Clothing</a>
                </p>
                   </div>
                  </div>
                  <div className="row">
                  <div className="col-md-6">
                  <img src={crwnpic2} alt="crwnepic"  style={{width:"100%"}}  ></img>
                  </div>
                  <div className="col-md-6">
                  <img src={crwnpic3} alt="crwnpic"  style={{width:"100%"}} ></img>
                  </div>
                </div>

                </p>
                </div>








  )
}

export default  CrwnClothing ;
