import React from "react";

export default function Article(props) {
  return (
    <div className="article">
      <left>
        <img src={`images/${props.image}`} className="article--image" />
      </left>
      <right>
        <div>
          <img src="images/placeholder.png" />
          <p>{props.location}</p>
          <a href="#">View on Google Map</a>
        </div>
        <h1>{props.name}</h1>
        <h5>{props.date}</h5>
        <p>{props.description}</p>
      </right>
    </div>
  );
}
