import React from 'react';
import Header from './Header';
import travelsitepic from '../images/travelsite/Capture.PNG';
import Travelsitelink from '../components/Travelsitelink';
import crwnclothing from '../images/crwn-clothing/Crwn.PNG';
import Crwnclothinglink from '../components/crwnclothinglink';
import CmitWork from '../components/cmitworklink';
import hybridimg from '../images/cmit/hybridemail.PNG';
import DService from '../images/cmit/DSfb.PNG';



const WebDev = () => {
  return (
    <div class="container">
           <Header></Header>

                <br/>
              <h3>Web Design</h3>
                <hr/>

                <div class="row">

                  <div class="col-md-6 ">

                      <div class="stylepics">
                      <img src={travelsitepic} alt="travelsitepic" height="150px" ></img>
                      </div>
                      <Travelsitelink></Travelsitelink>

                  </div>
                  <div class="col-md-6">
                      <div class="stylepics">
                      <img src={crwnclothing} alt="crwnclothingpic" height="150px"></img>

                      </div>
                      <Crwnclothinglink></Crwnclothinglink>

                  </div>
                  </div>
                    <br/>
                    <div className="row">

                        <div class="col-md-6 ">

                        <div class="stylepics">
                        <img src={hybridimg} alt="hybridpic" style={{height:"150px"}} ></img>
                        <img src={DService} alt="digitalpic" style={{height:"150px"}} ></img>
                        </div>

                    <CmitWork></CmitWork>

                    </div>
                    </div>

                 </div>








  )
}

export default WebDev;
