import React from "react";
import "../stylesheet/Cards.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="img" alt={ props.Title } src={ props.Pic} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> { props.Title }
          </li>
          <li>
            <a href={ props.Website }><strong>Website</strong> </a>
          </li>
          <li>
              <a href={ props.GitHubRepo }><strong>GitHub Repo</strong></a>
          </li>
          <li>
              <a href={ props.Pic }><strong>Screenshot</strong></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;