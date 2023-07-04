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
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.
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
