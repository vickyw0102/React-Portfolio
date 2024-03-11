import React from 'react';
import '../stylesheet/Home.css';
import About from "./About"
// import Home from './components/Home/Home.css';


function Home() {
  return (
    <>
      <div className='hero'>

        <div className="p-5 mb-4 bg-body-tertiary rounded-3 Background">
          <div className="container-fluid py-5 jumboCopy">
            <h1 className="display-5 fw-bold">Hi, I'm Vicky Wong</h1>
            <p className="col-md-12 fs-4">Front-end Website developer</p>
            
            
            <button className="btn btn-primary btn-lg" type="button" onClick={() => window.location.href = 'https://drive.google.com/file/d/19VcWvtfdFBtIrF8djZLbitXKGeBcQtzw/view?usp=drive_link'}>View My Resume</button>
          </div>
        </div>

       </div>
      <About/>
    </>
  );
}


export default Home;