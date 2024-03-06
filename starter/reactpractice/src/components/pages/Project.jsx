import React from 'react';
import '../stylesheet/Project.css';


function Project() {
  return (
    <div>
      <span> <h1> My Projects </h1></span> 
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      {/* <!--  work section-->
    <!-- Cards --> */}
      <section id="work">
          <div className="container-fluid">
              <div className="sectionHeading">
                  <h2 className="display-5 fw-bold text-center">Working Experience in UK & Hong Kong</h2>
              </div>
              

          {/* <div className="row workexperience"></div>
            <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
              <div className="card"></div> */}
              {/* <img src="../images/Workfromhome(1).jpg" className="card-img-top" alt="working experience" style="width:100% height:100%"/> */}

              
   
            

          <div className="row workexperience"></div>
            <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
              <div className="card"></div>
              {/* <img src="../images/Workfromhome(1).jpg" className="card-img-top" alt="working experience" style="width:100% height:100%"/> */}



            </div>

          </div>
        </section>
          {/* <!-- Card 1 -->


          {/* <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
              <div className="card">
              <img src="" className="card-img-top" alt="working experience" style="width:100% height:100%"/>
              <div className="card-body">
                  <h3 className="card-title">Experience in United Kingdom</h3>
                  
                  <p className="card-text">Self-employed - as a contractor to serve HK's merchants for Online gateway consultancy service and account management</p>
                  
                  <a href="#" className="btn btn-warning">Check it out</a>
              </div>
              </div>
          </div>
          </div>
      </section> */} 

    </div>
  );
}

export default Project;