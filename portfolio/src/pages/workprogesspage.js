import React from 'react';
import Header from './Header';
import bigpic from '../images/uxgoogleproj/bigpicture.jpg';
import closeup from '../images/uxgoogleproj/closeup.jpg';
import persona1 from '../images/uxgoogleproj/persona1.PNG';
import persona2 from '../images/uxgoogleproj/persona2.png';
import userjourney from '../images/uxgoogleproj/personauserjourneymap.PNG';
import stickynotes from '../images/uxgoogleproj/stickynotes.jpg';
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
        <p style={{width: "50%", float: "right"}}>Illustration of a user's ordering process in big picture. Big Picture focus on the user experience ordering through an app.

         <ol>
           <li>  Ana(User): is fustrated with the Restaurant website, she is not sure if there is an option for takeout.</li>
           <li>  She found an app that is easy to use and can find anything she wants on the home page.</li>
           <li>  She look at the menu and place an order.</li>
           <li>  She is happy to see an option to takeout and decided to walk to the Restaurant from work.</li>
           <li>  She didn't need to wait in line, she was able to pickup and go back to work.</li>
           <li>  She was happy to arrive back to work and didn't take long to get her order.</li>
         </ol>

        </p>
      </div>
      <br/>
      <div className="flex">
        <p>
          storyboard - Close-up
        </p>
        <img src={closeup} alt="closeup" style={{width: "50%"}}></img>

        <p style={{width: "50%", float: "right"}}>Illustration of a user's ordering process in Close-up. Close-up focus on the product.

        <ol>
           <li>  Ana(User): download and open the app.</li>
           <li>  She look the menu and customer reviews.</li>
           <li>  She place an order.</li>
           <li>  She choose takeout.</li>
           <li>  She receive confirmation number with the list.</li>
           <li>  She receive notification of her order ready to pickup.</li>
         </ol>
        </p>
      </div>

      <div>
        <br/>
      <h4>Personas</h4>
      <img src={persona1} alt="persona1" style={{width: "50%"}}></img>
      <img src={persona2} alt="persona2" style={{width: "50%"}}></img>
      <p>Fictional Users whose goals and characteristics represent the needs of a larger group of users.</p>

      </div>

      <div>
        <br/>
        <h4>User Journey</h4>
        <img src={userjourney} alt="personauserjourney" style={{width: "50%"}}></img>
        <p style={{width: "50%", float: "right"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit a
        nim id est laborum.</p>
        <img src={stickynotes} alt="stickynotes" style={{width: "40%", margin: "10px 0px 0px 50px"}}></img>

      </div>

      <div>
        <br/>
        <h4>Empathy Map</h4>
        <img src={userjourney} alt="personauserjourney" style={{width: "50%"}}></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit a
        nim id est laborum.  <a href='https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:2b0ec480-9988-38e8-ae42-c6f84bb3cee4' target='_blank'>Linkcd </a></p>


      </div>

   </div>

  )
}

export default uxgoogleproject ;
