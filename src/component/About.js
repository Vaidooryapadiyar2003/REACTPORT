import React from "react";
import logo from "../images/logo.jpg";

import "../css/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan,
        urna ut tincidunt vehicula, libero dolor varius justo, quis sodales quam
        turpis vel odio.
      </p>

      <img src={logo} alt="logo" class="photo" />
    </div>
  );
};

export default About;
