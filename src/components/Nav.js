import React from "react";
import '../stylesheets/Nav.css';
import { Link } from "react-router-dom";
//import images
import logo from '../images/Logo.svg';

const Nav =() =>{
    return (
        <nav>
            <img src={logo} alt="Logo little lemon" />
            <ul>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/menu'}>Menu</Link></li>
                <li><Link to={'/reservations'}>Reservations</Link></li>
                <li><Link to={'/orderOnline'}>Order Online</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;