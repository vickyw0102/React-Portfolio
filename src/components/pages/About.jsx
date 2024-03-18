import React from 'react';
import '../stylesheet/About.css';
import Cards from "./Cards"
import vickypic from '../../../public/images/Vickypic2.jpeg';



function About() {
    return (
      <>
        <section div id="Aboutme">
            <div className="Aboutmeinner" >
                <div className="sectionHeading">
                    <h2 className="display-5 fw-bold">About Me</h2>
                    <p>
                        I have moved to UK for around 3 years with my family. I am in the sales fields especially on Online Payment Gateway, Banking and Telecom industries over 20 years in Hong Kong.
                            </p>
                </div>
                <br></br>
                <div className="Container">
                    <div className="row profilepic">
                        <div className="col-lg-4 col-md-4 col-sm-12 Vickypic">
                            <img src={vickypic} /> 
                        </div>

                        <div className="col-lg-8 col-md-8 col-sm-12 Aboutmetext">
                            <h3> Personal Profile</h3>
                            
                            <h4>Name: Vicky Wong</h4>
                            <h4> Phone Number: 07700 11111</h4>
                            <h4> Email: Vicky@textgmail.com</h4>
                            <br></br>
                           
                            <h4> 
                            <a href ="https://www.linkedin.com/in/vicky-wong-7b731767/"> My LinkedIn Profile</a></h4>
                            <h4>
                            <a href="https://github.com/vickyw0102"> My GitHub Profile</a></h4>
                                    
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </>

    )}

    export default About;
