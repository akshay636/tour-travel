import React,{useState} from 'react';
import Carousel from './Carousel';
import Navbar from './Navbar';
import Cards from './Cards';
import Card from './Card';
import Footer from './Footer';
import Content from './Content';
import image from './Images';
import Services from './Services';

const Home = (props) => {
  
  return (
    <>
     <Carousel></Carousel>
     <Cards
     mode={props.mode}
     />
     <hr/>
     <Content
     mode={props.mode}
     />
     <Services
       mode={props.mode}
     />
     {/* <Footer/> */}
    </>
  );
}

export default Home;
