import React from 'react';

const News = (props) => {

  return (
   <> 
    <div key={props.index}>
      <div className={`card bg-${props.mode===('dark')?'secondary':'info'}`}   style={{width: '18rem'}}>
  <img className="card-img-top" src={props.url} alt="Card image cap"/>
  <div className="card-body">
    <h5 className={`card-title text-${props.mode===('dark')?'light':'dark'}`} styel={{color: props.mode===('dark')?'white':'black', color:'white'}}>{props.title}</h5>
    <p className={`card-title text-${props.mode===('dark')?'light':'dark'}`}>{props.desc}</p>
    <a href={props.href} className="btn btn-primary">{props.btn}</a>
  </div>
</div>
    </div>
    </>
  );
}

export default News;
