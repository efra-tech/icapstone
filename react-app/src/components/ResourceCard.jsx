import React from "react";

const Card = props => {
  return(
    <div className="card text-center" style={{width: '22rem', border: 'none', marginBottom: '1.3rem'}}>
      <a target="_blank" rel="noreferrer" className="resource-link" href={props.link}>
        <div className="overflow" style={{border: '4px solid #5f574a', borderRadius: '1.9rem'}} >
          <img src={props.imgsrc} alt="resource 1" className="card-img-top"/>
        </div>
        <div className="card-body" style={{backgroundColor: '#F2F2EC', padding: "7%"}}>
          <h4 className="card-title">
            {props.title}
          </h4>
        </div>
      </a>
    </div>
  );
}

export default Card;