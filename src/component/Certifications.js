import React from "react";
import "../css/Certifications.css"; // Import the corresponding CSS file

const certificationsData = [
  {
    title: "Certification 1",
    organization: "Certification Organization 1",
    date: "January 2022",
  },
  {
    title: "Certification 2",
    organization: "Certification Organization 2",
    date: "February 2022",
  },
  // Add more certifications as needed
];

const Certification = ({ title, organization, date }) => (
  <div className="certification">
    <h3>{title}</h3>
    <p>{organization}</p>
    <p>{date}</p>
  </div>
);

const Certifications = () => (
  <div className="certifications-container">
    <h2>Certifications</h2>
    <div className="certifications-list">
      {certificationsData.map((certification, index) => (
        <Certification key={index} {...certification} />
      ))}
    </div>
  </div>
);

export default Certifications;
