import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Header.css";
import food from "../images/restauranfood.jpg";

const Header = () => {
  return (
    <header>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>
            We are a family owned  <br />
            Mediterranean restaurant, <br />
            focused on traditional <br />
            recipes served with a modern <br />
            twist.
          </p>
          <Link to="/reservations">
          <button className="btn-hero">Reserve a table</button>
          </Link>
        </div>
        <img src={food} alt="food" id="food" />
      </div>
    </header>
  );
};

export default Header;
