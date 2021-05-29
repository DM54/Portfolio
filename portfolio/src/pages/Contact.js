import React from 'react';

const Contact = () => {
  return (
    <div class="container">

    <h3>Contact Form</h3>
    <form action="#" name="contact_form">
      <label for="first_name">First Name</label>
      <input name="first_name" type="text" required placeholder="John"/>

      <label for="last_name">Last Name</label>
      <input name="last_name" type="text" required placeholder="Doe"/>

      <label for="email">Email</label>
      <input name="email" type="email" required placeholder="you@domain.com"/>

      <label for="message">Message</label>
      <textarea name="message" cols="30" rows="10" placeholder="Enter your message here ..." required> </textarea>
      <div class="center">
        <input type="submit" value="Submit"/>
      </div>

      </form>
  </div>
  )
}

export default Contact;
