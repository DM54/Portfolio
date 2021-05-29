import React from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Work from './Work';
import Home from './Home';
import About from './About';
const Contact = () => {

  return (


    <div class="container">

            <div class="topnav">
            <a href="/" class="homelogo"></a>
             <div class="links">
              <a href="/work">Work</a>
              <a href="/about">About</a>
              <a class="active" href="/contact">Contact</a>

              </div>
             </div>
     <br/>



    <h2 class="green1">Get In Touch !</h2>
    <h3 class="green">Contact Form</h3>
    <p>Please fill out the form below.</p>
    <form action="https://formspree.io/f/dyana.monroy17@live.com" method = "POST" enctype = "multipart/form-data" id="contact_form">
      <label for="first_name">First Name</label>
      <input name="first_name" type="text" required placeholder="First Name"/>
      <br/>
      <label for="last_name">Last Name</label>
      <input name="last_name" type="text" required placeholder="Last Name"/>
      <br/>
      <label for="email">Email</label>
      <input name="email" type="email" required placeholder="Email"/>
      <br/>
      <label for="message">Message</label> <br/>
      <textarea name="message" cols="30" rows="10" placeholder="Enter your message here" required> </textarea>
      <div class="center">
        <input type="submit" value="Submit"/>

      </div>
      <br/>
      </form>


  </div>


  )
}

export default Contact;
