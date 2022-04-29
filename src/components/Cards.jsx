import React from 'react';
import Card from './Card';
import image from './Images';
import '../index.css';
import 'aos/dist/aos.css';
const Cards = (props) => {

  return (
    <div className='container'>
    <div className="row my-4 ak1" >
        <div className="col-xs-12 col-sm-6 col-md-4">
        <Card  title='Indore'
            desc='Mini Bombay'
            img={image['cardimg'][0]}
            mode={props.mode}
            btn='visit'
           
        />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
        <Card title='Delhi'
            desc='DELhi'
            img={image['cardimg'][1]}
            mode={props.mode}
            btn='visit'
            
        />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
        <Card title='Pune'
            desc='The Cite of Tech Company'
            img={image['cardimg'][2]}
            mode={props.mode}
            btn='visit'
        />
        </div>
    </div>
  </div>

  );
}

export default Cards;
