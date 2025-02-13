import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import { LuArrowRightCircle } from "react-icons/lu";
import { Link } from 'react-router-dom';


const Header = () => {
  const handleChange = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
  return (
    <Navbar bg="transparent" expand="lg" fixed='top' className="header ">
          <Navbar.Brand as={Link} to='/' className="d-flex gap-2 align-items-center">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-top"
          />
          <h1 className='logo-title'>Honesty</h1>
        </Navbar.Brand>
      <Navbar.Toggle  className='me-4 header-toggle' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='p-3' id="basic-navbar-nav">
    
        <Nav className="mr-auto nav-links">
          <Nav.Link onClick={handleChange} as={Link} to="/">Home</Nav.Link>
          <Nav.Link onClick={handleChange} as={Link} to="/services">Services</Nav.Link>
          <Nav.Link onClick={handleChange} as={Link} to="/furniture">Furniture</Nav.Link>
          <Nav.Link onClick={handleChange} as={Link} to="/contact">Contact Us</Nav.Link>
          <Nav.Link onClick={handleChange} href="#contact"><button className='button-primary'>Enquire Now <LuArrowRightCircle size={25} /></button></Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
