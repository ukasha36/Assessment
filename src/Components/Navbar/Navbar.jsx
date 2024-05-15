import React from 'react'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleShowNavbar = () => {
      setShowNav(!showNav);
   

    };

    const closeNavbar = () => {
      setShowNav(false);
  };
  
 


    return (
      <div>
        <nav className="navbarMain">
            <div className='navbar'>
            <Link  to="/">
            <h3 className='logo'>Carrotor </h3>
            </Link>

            <ul className='navul'>
          
                <Link  to="/ ">
                <li className='navli'>Features</li>
                </Link>
                <Link  to="/skills">
                <li className='navli'>Plans </li>
                </Link>
                <Link  to="/experience">
                <li className='navli'>FAQS</li>
                </Link>
                <div className='navbar-3'>
         
                <Link  to="/ ">
                <li className='navli'>Home</li>
                </Link>
                <a href="https://github.com/ukasha36" className="navbtn"> For Resturant</a>
                </div>
             </ul>


              
              
          
          </div>

          <div  className='open' onClick={toggleShowNavbar} >  <RxHamburgerMenu /> </div>
  
          {/* responsive navbar */}
          <div className={`responsiveNav ${showNav ? "openNav" : "closeNav"} `}>
            <ul className='mobileul'>
            <div onClick={toggleShowNavbar}><IoClose className='closebtn' /></div>

          <Link  to="/"  onClick={closeNavbar}>
          <li>Features</li>
                </Link>
                <Link  to="/about"  onClick={closeNavbar}>
                <li>Plans </li>
                </Link>
                <Link  to="/skills" onClick={closeNavbar}>
                <li>FAQS</li>
                </Link>
                <Link  to="/experience" onClick={closeNavbar}>
                <li>Home</li>
                </Link>
                 
                <Link  to="/contact" onClick={closeNavbar}>
                <li>For Resturant</li>
                </Link>

            </ul>
  
          </div>
        </nav>
      </div>
    );
  };
  
  const styles = {
    navli: {
      color: 'red', // Change the color here
    },
  };

export default Navbar