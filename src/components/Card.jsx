import React,{useState} from 'react';

const Card = (props) => {
 
  return (
    <>
<div className={` view overlay card bg-${props.mode===('dark')?'secondary':'info'}`}  style={{width: '19rem'}}>
  <img className="card-img-top" src={props.img} alt="Card image cap"/>
  <div className="card-body">
    <h5 className={`card-title text-truncate text-${props.mode===('dark')?'light':'dark'}`}>{props.title}</h5>
    <p className={`card-title text-${props.mode===('dark')?'light':'dark'}`}>{props.last_name}</p>
    <p className={`card-title text-${props.mode===('dark')?'light':'dark'}`}>{props.desc}</p>
    <p className={`card-title text-${props.mode===('dark')?'light':'dark'}`}>{props.Type}</p>
    
    <p className={`card-title text-${props.mode===('dark')?'light':'dark'}`}>{props.email}</p>
    <p className={`card-title text-${props.mode===('dark')?'light':'dark'}`}>{props.address}</p>
    <a href={props.href} className="btn btn-primary">{props.btn}</a>
  </div>
</div>
</>
    
  );
}

export default Card;
