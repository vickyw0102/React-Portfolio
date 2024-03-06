import React from 'react';
import '../stylesheet/Home.css';
import Cards from "./Cards"
// import Home from './components/Home/Home.css';


function Home() {
  return (
    <>
      <div className='hero'>
        {/* <img className='banner-image' src="../images/Hong-kong-view.jpg" alt="Banner Image"/> */}
          <div className='headerText'>
            <section id="firstbanner">
              <div className="p-5 bg-body-tertiary rounded-3 background">
                  <div className="container jumboCopy">
                      <h1 className ="display-2 fw-bold">Vicky Wong</h1>

                      <p className="col-md-12 fs-2 text-left"> Coming from HK and live in UK for 3 years</p>
                  </div>
              </div>
            </section>
            <h1>About Me Home </h1>

                      <p className="col-md-12 fs-2 text-left"> Coming 1 from HK and live in UK for 3 years</p>
                  </div>
                  <Cards/>
              </div>
           
            {/* <h1>About Me Home </h1>

            <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
<<<<<<< HEAD
            </p>
            <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            </p>
=======
            </p> */}


    </>
  );
}


export default Home;