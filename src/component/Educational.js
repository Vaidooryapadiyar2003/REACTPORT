// EducationalDetails.js
import React from "react";
import "../css/Educational.css";

const Educational = () => {
  return (
    <div className="educational-details">
      <h2>Education</h2>
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarText">
            <h3>University</h3>
            <p>This is temporary text.</p>
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <h3>PU</h3>
            <p>This is temporary text.</p>
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <h3>school</h3>
            <p>This is temporary text.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educational;
