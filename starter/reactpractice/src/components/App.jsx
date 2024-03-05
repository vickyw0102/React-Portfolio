import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Header from './pages/Header.jsx';
import Project from './pages/Project.jsx';




function App() {
  return (
    <>
      
      <Router>
       <Header/>
      
        
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        {/* Define a route that will have descendant routes */}
        <Route path="Project" element={<Project />} />
      </Routes>
      
    </Router>

  </>
  )
}

export default App;