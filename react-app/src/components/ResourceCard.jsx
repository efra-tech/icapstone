import React from "react";
import style from "./ResourceCard.css";

const Card = props => {
  return(
    <div className="cardsy text-center" style={{border: 'none', marginBottom: '1.4rem', borderRadius: '1rem', backgroundColor: '#F2F2EC'}}>
      <a target="_blank" rel="noreferrer" className="resource-link" href={props.link}>
        <div className="overflow" style={{border: '4px solid #5f574a', borderRadius: '1.63rem'}} >
          <img src={props.imgsrc} alt="resource 1" className="card-img-top" style={{borderRadius: '1.9rem', opacity:'82%', filter: 'grayscale(24%)'}} />
        </div>
        <div className="card-body" style={{backgroundColor: '#F2F2EC', padding: "7%", borderBottomLeftRadius:'1.9rem', borderBottomRightRadius:'1.9rem'}}>
          <h4 className="card-title" style={{textShadow: '1px 12px 12px rgba(60, 22, 131, 0.215)'}}>
            {props.title}
          </h4>
        </div>
      </a>
    </div>
  );
}

export default Card;