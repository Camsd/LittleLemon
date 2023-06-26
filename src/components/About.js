import React from "react";
import "../stylesheets/About.css";
import adrian from "../images/Mario and Adrian A.jpg";
import adrian2 from "../images/Mario and Adrian b.jpg";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="text-container">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            pariatur deserunt exercitationem ipsa consectetur ex porro! Possimus
            quos laudantium aspernatur.
          </p>
        </div>
        <div className="adrian-img">
          <img src={adrian} alt="Adrian and Mario"  className="adrian1"/>
          <img src={adrian2} alt="Adrian and Mario 2" className="adrian2" />
        </div>
      </div>
    </>
  );
};

export default About;
