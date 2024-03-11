import React from "react";
import '../stylesheet/ProjectGallery.css';

function ProjectGarllery() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Gallery"
          src="../images/Projects/Bootstrap-Portfolio_1.jpg"
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> Sample
          </li>
          <li>
            <strong>Occupation:</strong> Fry Cook
          </li>
          <li>
            <strong>Location:</strong> A Pinapple Under the Sea
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectGarllery;