import React from 'react';
import UXLinks from '../components/UXLink';
import WebDevLink from '../components/WebDevLink';
import Header from './Header';


const Work = () => {
  return (
    <div class="container">
           <Header></Header>

                <br/>
              <h3>Projects</h3>
                <hr/>
                <div class="row">

                <div class="col-md-6 ">

                  <div class="bgpic">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <UXLinks></UXLinks>

                   </div>

                </div>
                <div class="col-md-6">
                  <div class="bgpic2">
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                    <WebDevLink></WebDevLink>
                  </div>
                </div>





                </div>
                </div>







  )
}

export default Work;
