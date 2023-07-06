import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Main.css";
import salad from "../images/greek salad.jpg";
import brucheta from "../images/bruchetta.svg";
import lemonDessert from "../images/lemon dessert.jpg";
import { MdDeliveryDining } from 'react-icons/md';

const Main = () => {
  return (
    <>
    <div className="main-container">
      <div className="main-title">
        <h1>This week specials!</h1>
        <Link class="btn-main" to="/reservations">Order Online</Link>
      </div>
      <div className="cards">
        <div className="card">
          <img src={salad} alt="Greek Salad" />
          <div className="cards-title">
            <h2>Greek Salad</h2>
            <p className="price">$ 12.99</p>
          </div>
          <p className="description">
            The famous greek salad of
            crispy lettuce, peppers, olives
            and our Chicago style feta
            cheese, garnished with
            crunchy garlic.
          </p>
          <div className="logo">
          <p>Order a delivery</p>
          <MdDeliveryDining />
          </div>
        </div>
        <div className="card">
          <img src={brucheta} alt="Bruchetta" />
          <div className="cards-title">
            <h2>Bruchetta</h2>
            <p className="price">$ 5.99</p>
          </div>
          <p className="description">
            Our Bruchetta is made from
            grilled bread that has been
            smeared with garlic and
            seasoned with salt and olive
            oil.
          </p>
          <div className="logo">
          <p>Order a delivery</p>
          <MdDeliveryDining />
          </div>
        </div>
        <div className="card">
          <img src={lemonDessert} alt="Lemon Dessert" />
          <div className="cards-title">
            <h2>Lemon Dessert</h2>
            <p className="price">$ 5.00</p>
          </div>
          <p className="description">
            This comes straight from
            grandma's recipe book, every
            last ingredients has been
            sourced and is as authentic
            as can be imagined.
          </p>
          <div className="logo">
          <p>Order a delivery</p>
          <MdDeliveryDining />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Main;
