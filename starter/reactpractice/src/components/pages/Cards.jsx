import React from "react";
import "../stylesheet/Cards.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={ props.Title } src={ props.Gif } />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> { props.Title }
          </li>
          <li>
            <strong>Website:</strong> { props.Website }
          </li>
          <li>
            <strong>GitHub Repo:</strong> { props.GitHubRepo }
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;