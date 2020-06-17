import React from "react";
import './ContactForm.scss';
import SmallBtn from "../SmallBtn/SmallBtn";

const ContactForm = (props)=> {
  return (
    <form method="POST" action="https://formspree.io/kudacoder@gmail.com">
       <label for="name">NAME</label>
       <input type="name" className="form-control center-block" name="name" id="name" placeholder="Mr Spike Spiegel"
              required />
      <label for="company">COMPANY</label>
      <input type="company" className="form-control" name="company" id="company" placeholder="Bebop Big Shots Ltd" />
      <label for="message">MESSAGE</label>
      <textarea type="message" className="form-control" name="message" id="message" placeholder="See you Space Cowboy..."
              required />
      <label for="email">EMAIL ADDRESS</label>
      <input type="email" className="form-control" name="email" id="email" placeholder="myfunnyvalentine@ein.ed"
              required />
      <button type="submit" id="submit">
      <SmallBtn 
          text = "Submit"
          />
          </button>
    </form>
  );
}

export default ContactForm;