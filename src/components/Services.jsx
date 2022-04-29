import React,{useEffect} from 'react';
import plan from '../plan.png'
import hotel from '../hotell.png'
import train from '../t.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Services = (props) => {
 
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);

  return (
    <>
    
    <div>
    <div className="container m-3"  data-aos="fade-left">
        <div className="row">
        <div className="col-md-12 e"><h1 className={`card-title text-truncate text-${props.mode===('dark')?'light':'dark'}`}>services</h1></div>
        <div className=" col-md-4">
          <h3 className= {`card-title text-truncate text-${props.mode===('dark')?'light':'dark'}`}>Flight Booking</h3>
          <img src={plan} style={{height:'120px', width:'190px'}}></img>
        </div>

        <div className=" col-md-4">
          <h3 className={` text-center card-title text-truncate text-${props.mode===('dark')?'light':'dark'}`}>Hotel Booking</h3>
          <img src={hotel} style= {{height:'120px', width:'190px'}}></img>
        </div>
        <div className=" col-md-4">
        <h3 className={` text-center card-title text-truncate text-${props.mode===('dark')?'light':'dark'}`}>Train Booking</h3>
          <img src={train} style={{height:'120px', width:'190px'}}></img>
        </div>
        </div>
    </div>
      
    </div>
    <br/><br/><br/>
    </>
  );
}

export default Services;
