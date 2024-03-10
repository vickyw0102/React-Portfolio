import React from 'react';
import '../stylesheet/Home.css';
import About from "./About"
// import Home from './components/Home/Home.css';


function Home() {
  return (
    <>
      <div className='hero'>

        <div class="p-5 mb-4 bg-body-tertiary rounded-3 Background">
          <div class="container-fluid py-5 jumboCopy">
            <h1 class="display-5 fw-bold">Hi, I'm Vicky Wong</h1>
            <p class="col-md-12 fs-4">Front-end Website developer</p>
            
            
            <button class="btn btn primary btn-lg" type="button">View My Resume</button>
          </div>
        </div>

       </div>
      <About/>
    </>
  );
}


export default Home;