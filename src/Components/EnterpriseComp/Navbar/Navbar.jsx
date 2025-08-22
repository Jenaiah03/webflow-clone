import React, { Component } from 'react'
import logo from "../../../assets/webflowlogo.png"
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
    <div>
        <nav class="navbar">
        <div class="navbar-left">
            <img src={logo} alt="Webflow Logo" className="logo" />
            <p className='logo-text'>Webflow</p>
            <div>
                <ul class="nav-links">
                <li>
                    <Link to="/platform" className="nav-item dropdown">
                        <a href="" className='nav-link'>Platform <i class="fa-solid fa-chevron-down arrow"></i></a>
                    </Link>
                </li>

                    <li>
                        <Link to="/solutions" className="nav-item dropdown">
                        <a href="" className='nav-link'>Solutions <i class="fa-solid fa-chevron-down arrow"></i></a>
                        </Link>
                    </li>

                    <li>
                    <Link to="/resources" className="nav-item dropdown">
                    <a href="" className='nav-link'>Resources <i class="fa-solid fa-chevron-down arrow"></i></a>
                    </Link>
                    </li>


                <li>

                    <Link to="/" className="nav-
                    item">
                        <a href="" className='nav-link'>Enterprise</a>
                    </Link>
                    </li>
                    <li>
                    <Link to="/Enterprise" className="nav-
                    item">
                        <a href="" className='nav-link'>Pricing 
</a>
                    </Link>
                    </li>

                    
                </ul>
            </div>
        </div>

        <div class="navbar-right">
            <ul className='navright-link'>
                <li>
            <Link to="/login" className='links'>
            <a href="#" class="login">Log in</a>
            </Link>
            </li>
            
            <li>
            <Link to="/contact">
            <a href="#" class="contact" className='contact'>Contact sales</a>
            </Link>
            </li>
            </ul>

            <button className='button-cta'>Get started — it’s free</button>
            
        </div>
        
    </nav>
    </div>
    )
  }


export default Navbar
