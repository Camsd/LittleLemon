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
          <p className="review">"This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"</p>
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
          <p className="review">"Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."</p>
        </div>
        <div className="cardT">
          <p className="rating">Rating</p>
          <div className="stars">
            <AiTwotoneStar className="star" />
            <AiTwotoneStar className="star" />
            <AiTwotoneStar className="star" />
          </div>
          <img src={testimonial3} alt="testimonial 1" id="testimonial-3"/>
          <p className="name">James Sunderland</p>
          <p className="review">"I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture.".</p>
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
          <p className="name">Cheryl Mason</p>
          <p className="review">"This is the best Mediterranean food that I've ever had!"</p>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
