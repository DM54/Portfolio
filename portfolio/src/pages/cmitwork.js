import React from 'react';
import Header from './Header';
import hybridimg from '../images/cmit/hybridemail.PNG';
import DService from '../images/cmit/DSfb.PNG';
import hybridpage from '../images/cmit/hybridpage.PNG';
import freeit from '../images/cmit/FreeITemail.PNG';
import Demail from '../images/cmit/DSemail2.PNG';
import cyber from '../images/cmit/Cyberfb.PNG';
import digital from '../images/cmit/digitalservicefb.PNG';

const CmitWork = () =>{

  return(
    <div className="container">
        <Header></Header>

        <br/>
              <h3>Internship Work | CMIT Solutions of Tribeca </h3>
                <hr/>
      <p className="pcolorabout psize" >
      <div className="row">
        <div className="col-sm-4">
        <p className="pcolorabout psize " >
            Date:
            February 2020 – April 2021
        </p>
        </div>
        </div>
        </p>
        <div className="row">
        <div class="column ">
        <img src={hybridimg} alt="hybrid" style={{width:"100%"}}></img>


      </div>
      <div class="column">
        <img src={hybridpage} alt="hybridpage" style={{width:"100%"}}></img>
        <img src={freeit} alt="IT" style={{width:"100%"}}></img>

      </div>
      <div class="column">
        <img src={DService} alt="digitalpage" style={{width:"100%"}}></img>
        <img src={Demail} alt="digital" style={{width:"100%"}}></img>

      </div>
      <div class="column">
        <img src={cyber} alt="cyber" style={{width:"100%"}}></img>
        <img src={digital} alt="digital" style={{width:"100%"}}></img>

      </div>
      </div>

      <br/>

      <h5>Hybrid Working model | 03 2021 </h5>
      <p className="pcolorabout psize " >
      Role: Design, Email Marketing, Social Media Marketing <br/>
      Skills/Software: Constant Contact Email Automation, Photoshop, WordPress - HTML5/CSS3, JavaScript
      </p>
      <ul className="pcolorabout psize">
      <li>I created a landing page to help small and medium size businesses prepare to return to office as a hybrid working model and
        created a sign up form from Constant Contact.</li>
      <li>Whenever someone signs up to the mailing list they will receive an email of a PDF checklist document (to help small &
      medium size businesses prepare to return to office as a hybrid working model).</li>
      <li>Launch it to social media platforms and advertise it in LinkedIn.</li>
      <li><a href="https://cmitsolutions.com/tribeca/hybrid-working-model/" target="_blank" rel="noreferrer">Link</a></li>
      </ul>


      <br/>

      <h5>Digital Service page | 09 2020 </h5>
      <p className="pcolorabout psize " >
      Role: Design, Email Marketing, Social Media Marketing <br/>
      Skills/Software: Constant Contact Email Automation, Photoshop, WordPress - HTML5/CSS3, JavaScript, Calendly Plugin
      </p>
      <ul className="pcolorabout psize">
      <li>I created a new web page of Digital Service to offer web development, email marketing and SEO service to small and
        medium size businesses</li>
      <li>Made email campaign to launch it to social media platforms and advertise it in LinkedIn. </li>
      <li><a href="https://cmitsolutions.com/tribeca/digital-service/" target="_blank" rel="noreferrer">Link</a></li>
      </ul>


    </div>

  )
}

export default CmitWork;
