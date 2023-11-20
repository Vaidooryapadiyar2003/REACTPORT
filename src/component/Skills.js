import React from "react";
import "../css/Skills.css"; // Import the corresponding CSS file

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "HTML5",
    "CSS3",
    "Node.js",

    // Add more skills as needed
  ];

  return (
    <div className="skill-container">
      <h2>Skills</h2>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
