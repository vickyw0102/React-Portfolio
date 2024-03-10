import React from 'react';
import '../stylesheet/About.css';
import Cards from "./Cards"



function About() {
    return (
      <>
        <div className= "AboutMe">
            <h1> About Me</h1>
           
        <section id="categoryGrid">
            <div class="categoryGridArea">
            <div class="PersonalProfile "></div>
                <h2>Personal Profile</h2>
                <p> My Name: Vicky Wong</p>
                <p> Phone Number: 07700 11111</p>
                <p> Email: Vicky@textgmail.com</p>
            </div>
            <div class="categoryGridArea">
            <div class="Employement"></div>
                <h2>Employment Profile</h2>
                <p> Linkedin Profile</p>
                <a href ="https://www.linkedin.com/in/vicky-wong-7b731767/"> LinkedIn </a>
                <p> GitHub Profile</p>
                

                <a href="https://github.com/vickyw0102"> GitHub Profile</a>
                
            </div>
            <div class="categoryGridArea">
            <div class="Myphoto">
                <img src="../images/Vickypic.jpeg"/>
            </div>
            </div>
 
            </section>

        </div>
        


      </>

    )}

    export default About;
