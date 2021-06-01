import React from 'react';
import Header from './Header';
import travelsitepic from '../images/Capture.PNG';
import Travelsitelink from '../components/Travelsitelink';

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

                      </div>


                  </div>

                </div>
                </div>







  )
}

export default WebDev;
