import React from 'react';
import '../stylesheet/Project.css';
import Wrapper from "./Wrapper";
import Cards from "./Cards"
import ProjectGallery from "../data/ProjectGallery.json"


function Project() {
  return (
    <>
      
        <div className="ProjectGallery">
          
          <div class="p-5 mb-4 bg-body-tertiary rounded-3 HomeBackground">
          <div class="container-fluid py-5 HomejumboCopy">
            <h1 class="display-5 fw-bold ">My Projects </h1>
            

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
        Pic={ProjectGallery[0].Pic}
      />
      <Cards
        Title={ProjectGallery[1].Title}
        Website={ProjectGallery[1].Website}
        GitHubRepo={ProjectGallery[1].GitHubRepo}
        Pic={ProjectGallery[1].Pic}
      />
      <Cards
        Title={ProjectGallery[2].Title}
        Website={ProjectGallery[2].Website}
        GitHubRepo={ProjectGallery[2].GitHubRepo}
        Pic={ProjectGallery[2].Pic}
      />

      <Cards
        Title={ProjectGallery[3].Title}
        Website={ProjectGallery[3].Website}
        GitHubRepo={ProjectGallery[3].GitHubRepo}
        Pic={ProjectGallery[3].Pic}
      />

      <Cards
        Title={ProjectGallery[4].Title}
        Website={ProjectGallery[4].Website}
        GitHubRepo={ProjectGallery[4].GitHubRepo}
        Pic={ProjectGallery[4].Pic}
      />

      <Cards
        Title={ProjectGallery[5].Title}
        Website={ProjectGallery[5].Website}
        GitHubRepo={ProjectGallery[5].GitHubRepo}
        Pic={ProjectGallery[5].Pic}
      />



      </Wrapper>




      </div>
    </>
  );
}

export default Project;