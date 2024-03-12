import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Header from './pages/Header.jsx';
import Project from './pages/Project.Gallery.jsx';
import Footer from './pages/Footer.jsx';
import ContactForm from './pages/Contactform.jsx';




function App() {
  return (
    <>
      
      <Router>
       <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="Project" element={<Project />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      
    </Router>
    
  </>
  )
}

export default App;