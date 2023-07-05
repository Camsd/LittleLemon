import React from "react";
import "../stylesheets/Testimonials.css";
import testimonial1 from "../images/greek salad.jpg";
import testimonial2 from "../images/bruchetta.svg";
import testimonial3 from "../images/lemon dessert.jpg";
import { AiTwotoneStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <>
      <div className="title-testimonials">
        <h1>Testimonials</h1>
      </div>
      <div className="grid-testimonials">
        <div className="cardT">
          <p className="rating">Rating</p>
          <div className="stars">
            <AiTwotoneStar className="star" />
            <AiTwotoneStar className="star" />
            <AiTwotoneStar className="star" />
            <AiTwotoneStar className="star" />
          </div>
          <img src={testimonial1} alt="testimonial 1" />
          <p className="name">Tomas Harris</p>
          <p className="review">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="cardT">
          <p className="rating">Rating</p>
          <div className="stars">
            <AiTwotoneStar className="star" />
            <AiTwotoneStar className="star" />
            <AiTwotoneStar className="star" />
          </div>
          <img src={testimonial2} alt="testimonial 1" />
          <p className="name">James Clear</p>
          <p className="review">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="cardT">
          <p className="rating">Rating</p>
          <div className="stars">
            <AiTwotoneStar className="star" />
            <AiTwotoneStar className="star" />
            <AiTwotoneStar className="star" />
          </div>
          <img src={testimonial3} alt="testimonial 1" />
          <p className="name">James Sunderland</p>
          <p className="review">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="cardT">
          <p className="rating">Rating</p>
          <div className="stars">
            <AiTwotoneStar className="star" />
            <AiTwotoneStar className="star" />
            <AiTwotoneStar className="star" />
            <AiTwotoneStar className="star" />
            <AiTwotoneStar className="star" />
          </div>
          <img src={testimonial2} alt="testimonial 1" />
          <p className="name">Hadry Hendrix</p>
          <p className="review">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
