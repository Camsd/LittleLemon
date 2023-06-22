import React from "react";
import "../stylesheets/Testimonials.css";
import testimonial1 from "../images/greek salad.jpg";
import testimonial2 from "../images/bruchetta.svg";
import testimonial3 from "../images/lemon dessert.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="title-testimonials">
        <h1>Testimonials</h1>
      </div>
      <div className="grid-testimonials">
        <div className="cardT">
          <p className="rating">Rating</p>
          <img src={testimonial1} alt="testimonial 1" />
          <p className="name">Mia</p>
          <p className="review">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="cardT">
          <p className="rating">Rating</p>
          <img src={testimonial2} alt="testimonial 1" />
          <p className="name">Khalifa</p>
          <p className="review">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="cardT">
          <p className="rating">Rating</p>
          <img src={testimonial3} alt="testimonial 1" />
          <p className="name">Messi</p>
          <p className="review">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="cardT">
          <p className="rating">Rating</p>
          <img src={testimonial2} alt="testimonial 1" />
          <p className="name">Ronaldo</p>
          <p className="review">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
