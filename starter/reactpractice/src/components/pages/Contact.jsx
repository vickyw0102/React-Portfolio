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
          <h1 class="display-5 fw-bold">Know more about me </h1>
          <p class="fs-4">Front-end Website developer</p>
          </div>
        <ContactForm/>
        </div>

      
        

     
      </div>
    </>
  );
}

export default Contact;