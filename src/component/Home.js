import React from "react";
import "../css/Home.css";
import bg from "../images/bg.jpg";
import HireMeButton from "../component/HireMeButton";
import About from "../component/About";
import Skills from "../component/Skills";
import Contact from "../component/Contact";
import Project from "../component/Project";
import Footer from "../component/Footer";
import Icon from "../images/x1.jpg";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  return (
    <section id="home">
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
          experience in creating virtually appealing and user-friendly websites.
        </p>
        <br />
        <div className="buttonContainer">
          <HireMeButton />
          <div class="DownloadIcon-container">
            <a
              href="Vaishnavi Padiyar...pdf" // Replace with the actual path to your CV
              download="Vaidoorya'sCV.pdf"
              className="downloadCVButton"
            >
              {" "}
              <img src={Icon} alt="icon" className="DownloadIcon" />
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="aboutContainer">
        <About />
        <Project />
        <Skills />
        <Contact />
        <Footer />
      </div>
      <label className="bg">
        <img src={bg} alt="Profile" />
      </label>
    </section>
  );
};
export default Home;
