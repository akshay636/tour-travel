import React,{useEffect} from 'react';
import '../plan.css'
import Card from './Card';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Plans = (props) => {
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);
  return (
    <>
    <div className="row my-4 ak1">
      <div className="col-md-4" data-aos='fade-right'>
        <Card
          title='Devotional tour'
          img='https://static.toiimg.com/photo/83631272.cms'
          mode={props.mode}
          btn='Book Now'
        />
      </div>
      <div className="col-md-4" data-aos='fade-down'>
        <Card
          title='Weekend TOur'
          img={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYmjlXxi1lN4_uHx5Vz_l0JeFZ2SMCdZt7Mw&usqp=CAU`}
          mode={props.mode}
          btn='Book Now'
        />
      </div>
      <div className="col-md-4" data-aos='fade-left'>

        <Card
          title={`bechlor's tour`}
          img='https://www.holidify.com/images/cmsuploads/compressed/37498414922_ea6de1332d_o_20171202123959.jpg'
          mode={props.mode}
          btn='Book Now'
        />
      </div>
      </div>
      <div className="row lg-12 md-8 sm-4 ak1" >
      <div className="col-md-4" data-aos='fade-right'>
        <Card
          title='Group Tour'
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OEniXLr9dygKGi0GVHZSpymDrOnMjo17Ag&usqp=CAU'
          mode={props.mode}
          btn='Book Now'
        />
      </div>
      <div className="col-md-4" data-aos='fade-up'>
        <Card
          title='Historical palce Tour'
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6YgsEJNZbBqJIIRZQHKviXYnt36CaiHF5zQ&usqp=CAU' 
          mode={props.mode} 
          btn='Book Now'      />
      </div>
      <div className="col-md-4" data-aos='fade-left'>
        <Card
          title='family Tour'
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdixOoom8s4XciNSs9PKOhoaL0qE32NN3dtA&usqp=CAU'
          mode={props.mode}
          btn='Book Now'
        />
      </div>
</div>
    
     
    </>
  );
}

export default Plans;
