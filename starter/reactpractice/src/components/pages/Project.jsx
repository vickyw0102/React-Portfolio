import React from 'react';
import '../stylesheet/Project.css';
import Wrapper from "../pages/Wrapper";
import Cards from "../pages/Cards"
import ProjectList from "../data/ProjectList.json"


function Project() {
  return (
    <>
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
      </div>
      <div>
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