import React from 'react';
import {Link, Route, Routes } from 'react-router-dom';
import '../stylesheet/Contact.css';
import ContactForm from './Contactform';

import Footer from './Footer';
function Contact() {


  return (
    <>
      <div className='contacthero'>

        <div className="p-5 mb-4 bg-body-tertiary rounded-3 ContactBackground">
         <div className="container-fluid py-5 jumboCopy">
          <h1 className="display-5 fw-bold">My dog spots you lol! </h1>
          <p> Pls contact me!</p>
          
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