import React from "react";
import "../stylesheets/Footer.css";
import { Link } from "react-router-dom";
import logoLemon from "../images/footer-logo.png";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import { ImPhone } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/search/Restaurantes/@41.8522721,-87.9570869,17z?entry=ttu",
      "_blank"
    );
  };

  return (
    <>
      <div className="footer-list">
        <img src={logoLemon} alt="logo-footer" />
        <ul className="links">
          <Link>Navigation</Link>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link>Reservations</Link>
          <Link>Order Online</Link>
          <Link>Login</Link>
        </ul>
        <ul>
          <li>Contact</li>
          <li onClick={handleMapClick}>
            <LuMapPin />
            <span>
              539 Oakbrook Center, Oak Brook, IL 60523, Estados Unidos
            </span>
          </li>
          <li>
            <ImPhone /> <span>(734)-677-9424</span>
          </li>
          <li>
            <a href="mailto:info@littlemon.com">
              <AiOutlineMail />
              <span>info@littlemon.com</span>
            </a>
          </li>
        </ul>
        <ul className="social-media">
          <li>Social Media</li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFacebook />
              <span className="logo-name">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter />
              <span className="logo-name">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram />
              <span className="logo-name">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
