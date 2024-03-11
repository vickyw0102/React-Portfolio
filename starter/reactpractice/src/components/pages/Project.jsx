import React from 'react';
import '../stylesheet/Project.css';
import Wrapper from "../pages/Wrapper";
import Cards from "../pages/Cards"
import ProjectList from "../data/ProjectList.json"


function Project() {
  return (
    <>
      
        <div className="projectList">
          
          <div class="p-5 mb-4 bg-body-tertiary rounded-3 HomeBackground">
          <div class="container-fluid py-5 jumboCopy">
            <h1 class="display-5 fw-bold ">My Projects </h1>
            <p class="col-md-12 fs-4">Front-end Website developer</p>

          </div>

        </div>

      </div>
      <div>

     
      <Wrapper>
      {/* <Title>Friends List</Title> */}
      <Cards
        Title={ProjectList[0].Title}
        Website={ProjectList[0].Website}
        GitHubRepo={ProjectList[0].GitHubRepo}
        Pic={ProjectList[0].Pic}
      />
      <Cards
        Title={ProjectList[1].Title}
        Website={ProjectList[1].Website}
        GitHubRepo={ProjectList[1].GitHubRepo}
        Pic={ProjectList[1].Pic}
      />
      <Cards
        Title={ProjectList[2].Title}
        Website={ProjectList[2].Website}
        GitHubRepo={ProjectList[2].GitHubRepo}
        Pic={ProjectList[2].Pic}
      />

      <Cards
        Title={ProjectList[3].Title}
        Website={ProjectList[3].Website}
        GitHubRepo={ProjectList[3].GitHubRepo}
        Pic={ProjectList[3].Pic}
      />

      <Cards
        Title={ProjectList[4].Title}
        Website={ProjectList[4].Website}
        GitHubRepo={ProjectList[4].GitHubRepo}
        Pic={ProjectList[4].Pic}
      />

      <Cards
        Title={ProjectList[5].Title}
        Website={ProjectList[5].Website}
        GitHubRepo={ProjectList[5].GitHubRepo}
        Pic={ProjectList[5].Pic}
      />



      </Wrapper>




      </div>
    </>
  );
}

export default Project;