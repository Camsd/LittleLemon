import React from "react";
import "../stylesheets/Footer.css";
import logoLemon from '../images/footer-logo.png';

const Footer = () => {
  return (
    <>
      <div className="footer-list">
        <img src={logoLemon} alt="logo-footer" />
        <ul>
          <li>Doormat Navigation</li>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
        <ul>
          <li>Social Media Links</li>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
