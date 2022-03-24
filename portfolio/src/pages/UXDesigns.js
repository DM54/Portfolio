import React from 'react';
import Header from './Header';
import travelsitepic from '../images/travelsite/Capture.PNG';
import WorkprogresspageUX from '../components/workprogresspageUX';


const UXDesigns = () => {
  return (
    <div class="container">
           <Header></Header>

                <br/>
              <h3>UX Design</h3>
              <hr/>

              <div class="row">

                <div class="col-md-6 ">

                    <div class="stylepics">
                   <img src={travelsitepic} alt="travelsitepic"  style={{width:"100%"}} ></img>
                    </div>
                    <WorkprogresspageUX></WorkprogresspageUX>

                </div>
                </div>

                </div>








  )
}

export default UXDesigns;
