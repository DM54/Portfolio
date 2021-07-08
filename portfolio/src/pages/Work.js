import React from 'react';
import UXLinks from '../components/UXLink';
import WebDevLink from '../components/WebDevLink';
import Header from './Header';
import UXpic from '../images/UI-UX-Design-Strategy.png';
import WEDpic from '../images/b1.3.gif';
const Work = () => {
  return (
    <div class="container">
           <Header></Header>

                <br/>
              <h3>Projects</h3>
                <hr/>
                <div class="row">

                <div class="col-md-6 ">

                    <div class="stylepics">
                    <img src={UXpic} alt="UX" style={{width:"100%"}} ></img>
                    </div>
                    <UXLinks></UXLinks>



                </div>
                <div class="col-md-6">
                    <div class="stylepics">
                     <img src={WEDpic} alt="web" style={{width:"100%"}} ></img>
                     </div>
                    <WebDevLink></WebDevLink>

                </div>





                </div>
                </div>







  )
}

export default Work;
