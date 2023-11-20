// HireMeButton.js
import React from "react";
import { Link } from "react-router-dom";

const HireMeButton = () => {
  return (
    <Link to="/contact">
      <button
        id="hire-me-button"
        onClick={HireMeButton}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "15px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Hire Me
      </button>
    </Link>
  );
};

export default HireMeButton;
