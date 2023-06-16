import React from "react";
import '../stylesheets/Nav.css';
//import images
import logo from '../images/Logo.svg';

const Nav =() =>{
    return (
        <nav>
            <img src={logo} alt="Logo little lemon" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;