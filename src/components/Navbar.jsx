import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Weather from './Movies';
const Navbar = (props) => {
  const [showModal, setShow] = useState(false);
  const [showModal1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const[show,setShows]=useState(false);
  return (
<>
  <Modal show={showModal} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Login</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
</form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleClose}>
        Log in
      </Button>
    </Modal.Footer>
  </Modal>
  <Modal show={showModal1} onHide={handleClose1}>
    <Modal.Header closeButton>
      <Modal.Title>Login</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <form>
    <div className="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  
  <div className="form-group">
    <label for="exampleInputPassword1">create password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">confirm password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
</form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleClose1}>
        Log in
      </Button>
    </Modal.Footer>
  </Modal>
      <nav className={`navbar sticky-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">ITVARA.CO</Link>
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShows(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/plans">Plans</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/train">Trains</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todo">Todo</Link>
              </li>
            </ul>
            

          </div>
          <button className='btn btn-primary mx-2' onClick={handleShow} >Sign up</button>
          <button className='btn btn-primary' onClick={handleShow1} >Register</button>
          <div className="form-check form-switch text-dark mx-2">
            <input onClick={props.theme} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.mode === ('light') ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault" >{props.txt}</label>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
