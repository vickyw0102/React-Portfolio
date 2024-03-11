import React from 'react';
import '../stylesheet/Project.css';
import Wrapper from "../pages/Wrapper";
import Cards from "../pages/Cards"
import ProjectList from "../data/ProjectList.json"


function Project() {
  return (
    <>
      
        <div className="projectList">
          
          <div class="p-5 mb-4 bg-body-tertiary rounded-3 Background">
          <div class="container-fluid py-5 jumboCopy">
            <h1 class="display-5 fw-bold">Hi, I'm Vicky Wong</h1>

          </div>

        </div>

      </div>
      <div>
        {/*search button}
        {/* <div className="input-box">

          <input type="search" 
          name="search-form"
          className="search-input"
          onChange={(e)= setSearchQuery(e.target.value)}
          placeholder="Search Project"/>
        </div> */}
      <Wrapper>
      {/* <Title>Friends List</Title> */}
      <Cards
        Title={ProjectList[0].Title}
        Website={ProjectList[0].Website}
        GitHubRepo={ProjectList[0].GitHubRepo}
        Gif={ProjectList[0].Gif}
      />
      <Cards
        Title={ProjectList[1].Title}
        Website={ProjectList[1].Website}
        GitHubRepo={ProjectList[1].GitHubRepo}
        Gif={ProjectList[1].Gif}
      />
      <Cards
        Title={ProjectList[1].Title}
        Website={ProjectList[1].Website}
        GitHubRepo={ProjectList[1].GitHubRepo}
        Gif={ProjectList[1].Gif}
      />

      <Cards
        Title={ProjectList[1].Title}
        Website={ProjectList[1].Website}
        GitHubRepo={ProjectList[1].GitHubRepo}
        Gif={ProjectList[1].Gif}
      />

      <Cards
        Title={ProjectList[1].Title}
        Website={ProjectList[1].Website}
        GitHubRepo={ProjectList[1].GitHubRepo}
        Gif={ProjectList[1].Gif}
      />

      <Cards
        Title={ProjectList[1].Title}
        Website={ProjectList[1].Website}
        GitHubRepo={ProjectList[1].GitHubRepo}
        Gif={ProjectList[1].Gif}
      />

      <Cards
        Title={ProjectList[1].Title}
        Website={ProjectList[1].Website}
        GitHubRepo={ProjectList[1].GitHubRepo}
        Gif={ProjectList[1].Gif}
      />


      </Wrapper>




      </div>
    </>
  );
}

export default Project;