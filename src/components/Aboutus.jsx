import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slidbar from './Slidbar';
import Slidslick from './Slidslick';
const Aboutus = (props) => {
  useEffect(() => {
    Aos.init({duration:500});
  }, []);
  return (
      <>
<section className="bg-light pt-3 pb-5 shadow-sm">
<div className="container" data-aos="fade-up">
  <div className="row ">
    <div className="col-12">
      <h3 className="text-uppercase border-bottom mb-4">We help Traverholics to travel around world with minumum efforts</h3>
    </div>
    <div className="col-md-4" data-aos='fade-right'>
    <img  align='left' style={{width:'250px', height:'250px'}} src="https://i.postimg.cc/4xVY64PV/porto-timoni-double-beach-corfu-greece-700.jpg" className="card-img-top" alt="Card Image"/>
    </div>
    <div className="col-md-8" data-aos='fade-left'>
    <p style={{textAlign:'justify'}}>Panache Travel Group (PTG) is a company which specializes in small, escorted luxury tour packages for discriminating clients. It will operate from two bases to better serve customers across the country: one in Salt Lake City, Utah; the other in New York, New York. The founders and employees of Panache Travel Group are experienced travelers and travel professionals who are knowledgeable, capable and passionate about the services Panache Travel Group will promote and offer.</p>
    </div>
  </div>

  
</div>
</section>
<Slidbar/>
<Slidslick/>
      </>
  );
}

export default Aboutus;
