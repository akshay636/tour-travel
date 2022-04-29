import React from 'react';
import {FaFacebookSquare } from "react-icons/fa";
import {FiInstagram} from 'react-icons/fi'
import {AiFillTwitterCircle,AiFillLinkedin,AiOutlineGithub} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'

const Footer = () => {
    return (
        <div>
            <footer className="bg-light text-center text-white" style={{position:'relative'}}>

                <div className="container p-4 pb-0">

                    <section className="mb-4">

                        <a className="btn btn-primary btn-floating m-1" style={{backgroundColor:' #3b5998'}}
                            href="#!"
                            role="button"
                        ><FaFacebookSquare/></a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor:' #55acee'}}
                            href="#!"
                            role="button"
                        ><FiInstagram/></a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor:' #dd4b39'}}
                            href="#!"
                            role="button"
                        ><AiFillTwitterCircle/></a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: '#ac2bac'}}
                            href="#!"
                            role="button"
                        ><FcGoogle/></a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#0082ca" }}
                            href="#!"
                            role="button"
                        ><AiFillLinkedin/></a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor:' #333333'}}
                            href="#!"
                            role="button"
                        ><AiOutlineGithub/></a>
                    </section>

                </div>



                <div className="text-center p-3" style={{backgroundColor:" rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">TOurrrr.com</a>
                </div>

            </footer>
        </div>
    );
}

export default Footer;
