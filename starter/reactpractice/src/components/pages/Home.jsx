import React from 'react';
import '../stylesheet/Home.css';
// import Home from './components/Home/Home.css';


function Home() {
  return (
    <>
      <div className='hero'>
        <img className='banner-image' src="../images/Cityline_Introduction.jpg" alt="Banner Image"/>
          <div className='headerText'>
            <h1>About Me Home </h1>
            <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            </p>
          </div>
        
      </div>
    </>
  );
}

export default Home;