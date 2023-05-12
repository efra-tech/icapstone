import React from "react";

const Card = props => {
  return(
    <div className="card text-center">
      <a target="_blank" rel="noreferrer" className="resource-link" href={props.link}>
        <div className="overflow">
          <img src={props.imgsrc} alt="resource 1" className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">
            {props.title}
          </h4>
        </div>
      </a>
    </div>
  );
}

export default Card;