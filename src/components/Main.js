import React from "react";
import "../stylesheets/Main.css";
import salad from '../images/greek salad.jpg';

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-title">
      <h1>This week specials!</h1>
      <button className="btn-main">Online Menu</button>
    </div>
      <div class="cards">
        <img src={salad} alt="Card Image" />
        <h2>Card Title 1</h2>
        <p class="price">$10.99</p>
        <p class="description">This is a description of the card.</p>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default Main;
