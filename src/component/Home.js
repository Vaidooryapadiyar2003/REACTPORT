import React from "react";
import "../css/Home.css";
import "../css/About.css";
import bg from "../images/bg.jpg";

import HireMeButton from "../component/HireMeButton";
import { Link, useLocation } from "react-router-dom";
const Home = () => {
  return (
    <secion id="home">
      <>
        <div class="homeContent">
          <span className="hello"> Hello,</span>
          <span className="homeText">
            I,m
            <span className="homeName"> Vaidoorya Padiyar</span>
            <br />
            Frontend Developer
          </span>
          <p className="homePara" style={{ height: "250px" }}>
            I,m a skilled and passionate web designer with <br />
            experience in creating virtually appealing and user-friendly
            websites.
          </p>
          <br />
          <HireMeButton />
        </div>
        <label className="bg">
          <img src={bg} alt="Profile" />
        </label>
      </>
    </secion>
  );
};
export default Home;
