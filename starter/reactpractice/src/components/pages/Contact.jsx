import React from 'react';
import {Link, Route, Routes } from 'react-router-dom';
import '../stylesheet/Contact.css';
import ContactForm from './Contactform';
import { useState } from 'react';
function Contact() {


  return (
    <>
      <div className='contacthero'>

        <div class="p-5 mb-4 bg-body-tertiary rounded-3 Background">
         <div class="container-fluid py-5 jumboCopy">
          <h1 class="display-5 fw-bold">Hi, I'm Vicky Wong</h1>
          <p class="col-md-12 fs-4">Front-end Website developer</p>
          </div>
        </div>
        
        <h1>Contact Page1</h1>
        <p>
          Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
          molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
          magna a ultrices. Aenean pellentesque placerat lacus imperdiet
          efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
          mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
          posuere, eget tristique dui dapibus. Maecenas fermentum elementum
          faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
          ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
          dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
          rhoncus. Etiam vel condimentum magna, quis tempor nulla.
        </p>
        <ContactForm/>
        
        <Link to="learn" role="button" className="btn btn-link">
          Learn More
        </Link>
        <Link to="contact" role="button" className="btn btn-link">
          Learn Less
        </Link>
     
      </div>
    </>
  );
}

export default Contact;