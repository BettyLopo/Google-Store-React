import "./navbar.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="nav-wrapper"> 
                <img className="nav-img" src="/assets/images/google-logo.png"/>
                <nav className="menunav">
                    <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                        <li className="navbar-item"> <a>Phone</a></li>
                        <li className="navbar-item"><NavLink to="/earbuds" activeClassName="active" onClick={toggleMenu}> Earbuds</NavLink></li>
                        <li className="navbar-item"> <NavLink to="/watches" activeClassName="active" onClick={toggleMenu}> Watches</NavLink></li>
                        <li className="navbar-item"><a>Smart Home</a></li>
                        <li className="navbar-item"><a>Accessories</a></li>
                        <li className="navbar-item"><a>Subsciptions</a></li>
                    </ul>
                </nav>
                <span class="iconos-nav">
                    <img src="/assets/images/icons/Search.svg"  />
                    <img src="/assets/images/icons/Help.svg"  />
                    <NavLink to="/cart" ><img className="cart-icon" src="/assets/images/icons/Cart.svg" /></NavLink> 
                    <img src="/assets/images/icons/Avatar.svg" />
                    <div className="navbar-toggle" onClick={toggleMenu}>
                    <label for="menu" className="menu-hamburgesa"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="25px" fill="#1a73e8"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                        </label>
                        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    </div>
                </span>
            </header>
    
        );
    };

export default Navbar;