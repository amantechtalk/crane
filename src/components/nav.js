

import React, { useState , useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './log.css';
import { FaBars, FaTimes } from 'react-icons/fa'; 

import {
  isMobile,
  isTablet,
  isDesktop,
} from 'react-device-detect';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);



  const toggleMenu = () => {
    setIsOpen(!isOpen);

  }
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    navigate('/landing-page'); // Navigate to the home page after successful login
  }


  return (
    <div className="head" >
       
   {/*  <p align='center' className="heading">Mobi Lift</p>
   </div>
    <div>*/}
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row'}}> 
     {isDesktop && <img  
     
     src='/images/icon.png' width="140" height="90"></img>}
    {isDesktop && <nav className="nav-links">
    
    <a href="#about-us">About Us</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
    <a href="#faq">FAQ</a>
    <a href="/logout">Logout</a>
  </nav>}
  {isTablet && <nav className="nav-links">
    
    <a href="#about-us">About Us</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
    <a href="#faq">FAQ</a>
    <a href="/logout">Logout</a>
  </nav>}
  {isMobile &&  <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#about-us">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#faq">About</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </nav>}


   
    {isMobile && <img     src='/images/icon.png' width="80" height="50"></img>}
   
</div>


</div>
  );
};


  export default Navbar;