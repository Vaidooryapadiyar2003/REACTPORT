import "../css/Skills.css";
import React from "react";
import UIDesign from "../images/ui.jpg";
import WebDesign from "../images/web.jpg";
import AppDesign from "../images/app.jpg";

export default function Card({ skills }) {
  function imgfunction(value) {
    if (value === "UIDesign") {
      return UIDesign;
    } else if (value === "WebDesign") {
      return WebDesign;
    } else if (value === "AppDesign") {
      return AppDesign;
    }
  }

  return (
    <>
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarText">
            <h2>{skills.H}</h2>
            <p>{skills.P}</p>
            <img
              src={imgfunction(skills.I)}
              alt={skills.H}
              className="skillBarImg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
