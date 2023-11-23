import React from "react";
import Image1 from "../images/a1.jpg";
import Image2 from "../images/a2.jpg";
import Image3 from "../images/a3.jpg";
import Image4 from "../images/a4.jpg";

import "../css/Project.css"; // Import the corresponding CSS file

export default function Project() {
  return (
    <>
      <h1>Projects</h1>
      <div id="container">
        <div className="col-md-3">
          <div className="box">
            <img src={Image1} className="b1" alt="Project 1" />
            <h3 class="card-title">Netflix clone</h3>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="more-button">For more</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="box">
            <img src={Image2} className="b1" alt="Project 2" />
            <h3 class="card-title">E commerce website</h3>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="more-button">For more</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="box">
            <img src={Image3} className="b1" alt="Project 3" />
            <h3 class="card-title">College website</h3>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="more-button">For more</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="box">
            <img src={Image4} className="b1" alt="Project 4" />
            <h3 class="card-title">Food ordering system</h3>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="more-button">For more </button>
          </div>
        </div>
      </div>
    </>
  );
}
