import React from 'react';
import '../stylesheet/Project.css';
import Wrapper from "./Wrapper";
import Cards from "./Cards"
import ProjectGallery from "../data/ProjectGallery.json"
import bootstrapPortfolio from "../../images/Projects/bootstrap-Portfolio_1.jpg";
import PasswordGenerator from "../../images/Projects/Password-Generator_1.jpg";
import CodeQuiz from "../../images/Projects/CodeQuiz_1.jpg";
import WorkDayScheduler from "../../images/Projects/WorkDayScheduler_1.jpg";
import weatherDashboard from "../../images/Projects/weather-Dashboard_1.jpg";
import ScreenTracker from "../../images/Projects/ScreenTracker_1.jpg";



function Project() {
  return (
    <>
      
        <div className="ProjectGallery">
          
          <div className="p-5 mb-4 bg-body-tertiary rounded-3 HomeBackground">
          <div className="py-5 HomejumboCopy">
            <h1 className="display-5 fw-bold ">My Projects </h1>
            

          </div>

        </div>

      </div>
      <div>

     
      <Wrapper>
      {/* <Title>Friends List</Title> */}
      <Cards
        Title={ProjectGallery[0].Title}
        Website={ProjectGallery[0].Website}
        GitHubRepo={ProjectGallery[0].GitHubRepo}
        Pic={bootstrapPortfolio}
      />
      <Cards
        Title={ProjectGallery[1].Title}
        Website={ProjectGallery[1].Website}
        GitHubRepo={ProjectGallery[1].GitHubRepo}
        Pic={PasswordGenerator}
      />
      <Cards
        Title={ProjectGallery[2].Title}
        Website={ProjectGallery[2].Website}
        GitHubRepo={ProjectGallery[2].GitHubRepo}
        Pic={CodeQuiz}
      />

      <Cards
        Title={ProjectGallery[3].Title}
        Website={ProjectGallery[3].Website}
        GitHubRepo={ProjectGallery[3].GitHubRepo}
        Pic={WorkDayScheduler}
      />

      <Cards
        Title={ProjectGallery[4].Title}
        Website={ProjectGallery[4].Website}
        GitHubRepo={ProjectGallery[4].GitHubRepo}
        Pic={weatherDashboard}
      />

      <Cards
        Title={ProjectGallery[5].Title}
        Website={ProjectGallery[5].Website}
        GitHubRepo={ProjectGallery[5].GitHubRepo}
        Pic={ScreenTracker}
      />



      </Wrapper>




      </div>
    </>
  );
}

export default Project;