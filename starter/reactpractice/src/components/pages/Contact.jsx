import React from 'react';
import {Link, Route, Routes } from 'react-router-dom';
import '../stylesheet/Contact.css';
import ContactForm from './Contactform';
import { useState } from 'react';
import Footer from './Footer';
function Contact() {


  return (
    <>
      <div className='contacthero'>

        <div className="p-5 mb-4 bg-body-tertiary rounded-3 Background">
         <div className="container-fluid py-5 jumboCopy">
          <h1 className="display-5 fw-bold">Know more about me </h1>
          <p className="fs-4">Front-end Website developer</p>
        </div>
      </div>  
      </div>  
        <ContactForm/>
        <Footer/>
          
      <div className="footer">
      
      
      
        
        

      
        

     
      </div>
    </>
  );
}

export default Contact;