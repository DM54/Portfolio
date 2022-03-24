import React from 'react';
import Header from './Header';
import bigpic from '../images/uxgoogleproj/bigpicture.jpg';
import closeup from '../images/uxgoogleproj/closeup.jpg';


const uxgoogleproject = () => {
  return (
    <div class="container">
           <Header></Header>
          <br/>
      <h3  className="name">A Menu and Ordering App for a Fast Food Restaurant</h3>
                <div className="row">

                  <div className="col-sm-4">
                  <p className="pcolorabout psize styles" >
                     Google UX Design Program <br/>
                  </p>
                  </div>
                </div>
         <hr/>
         <div className="row">
                  <div className="col-sm-3">
                  <p className="pcolorabout psize styles" >
                     Date <br/>
                     May 2021 - Present
                  </p>
                  </div>
                  <div className="col-sm-3">
                  <p className="pcolorabout psize styles" >
                     Role <br/>
                    Generalist
                  </p>
                  </div>
                  <div className="col-sm-3">
                  <p className="pcolorabout psize styles" >
                     Collaboration <br/>
                     Dyana Monroy
                  </p>
                  </div>
                  <div className="col-sm-3">
                  <p className="pcolorabout psize styles" >
                     Tools <br/>
                     Figma, Adobe XD, Microsoft - Word, Excel, GIT, Visual Studio Code, Heroku
                  </p>
                  </div>
                </div>

      <div className="backgroundinfo">
        <p>Background: Designing a menu and ordering app for user who need fast and easy ordering process
          and ready for takeout or delivery from the nearest location to user's destination.</p>
      </div>
      <div className="flex">
        <p>
          storyboard - Big Picture
        </p>
        <img src={bigpic} alt="bigpicture" style={{width: "50%"}}></img>
      </div>
      <br/>
      <div className="flex">
        <p>
          storyboard - Close-up
        </p>
        <img src={closeup} alt="closeup" style={{width: "50%"}}></img>
      </div>

   </div>

  )
}

export default uxgoogleproject ;
