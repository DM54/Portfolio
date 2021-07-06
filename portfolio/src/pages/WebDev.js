import React from 'react';
import Header from './Header';
import travelsitepic from '../images/Capture.PNG';
import Travelsitelink from '../components/Travelsitelink';
import crwnclothing from '../images/crwn-clothing/Crwn.PNG';
import Crwnclothinglink from '../components/crwnclothinglink';

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

                </div>







  )
}

export default WebDev;
