import React from "react";
import "../stylesheets/Main.css";
import salad from "../images/greek salad.jpg";
import brucheta from '../images/bruchetta.svg';
import lemonDessert from '../images/lemon dessert.jpg';

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-title">
        <h1>This week specials!</h1>
        <button className="btn-main">Online Menu</button>
      </div>
      <div class="cards">
        <div>
          <img src={salad} alt="Greek Salad" />
          <h2>Greek Salad</h2>
          <p class="price">$10.99</p>
          <p class="description">This is a description of the card.</p>
          <button>Order Now</button>
        </div>
        <div>
          <img src={brucheta} alt="Bruchetta" />
          <h2>Bruchetta</h2>
          <p class="price">$10.99</p>
          <p class="description">This is a description of the card.</p>
          <button>Order Now</button>
        </div>
        <div>
          <img src={lemonDessert} alt="Lemon Dessert" />
          <h2>Lemon Dessert</h2>
          <p class="price">$10.99</p>
          <p class="description">This is a description of the card.</p>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
