import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Nav.css";
import logo from "../images/Logo.svg";
import darkLogo from "../images/DarkLogo.png";

const Nav = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setNav(true) : setNav(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        backgroundColor: nav ? "#495E57" : "#fff",
        color: nav ? "white" : "black",
        paddingTop: nav ? "1rem" : "1rem",
        paddingBottom: nav ? "1rem" : "1rem",
        borderBottom: nav ? "1px solid white" : "1px solid transparent",
        transition: "all .3s ease",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        width: "100%",
      }}
    >
      <Link to="/home" className="logo-link">
        <img src={nav ? darkLogo : logo} alt="Logo little lemon" />
      </Link>
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/reservations"}>Reservations</Link>
        </li>
        <li>
          <Link to={"/order"}>Order Online</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
