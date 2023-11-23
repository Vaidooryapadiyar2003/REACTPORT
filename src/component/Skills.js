// import React from "react";
// import "../css/Skills.css"; // Import the corresponding CSS file
// import UIDesign from "../images/ui.jpg";
// import WebDesign from "../images/web.jpg";
// import AppDesign from "../images/app.jpg";

// const Skills = () => {
//   return (
//     <section id="skills">
//       <span className="skillTitle">What I do</span>
//       <span className="skillDesc">
//         A proficient front-end web developer combines expertise in HTML, CSS,
//         and JavaScript frameworks to craft visually appealing and seamlessly
//         functional websites. Their skill set extends to responsive design,
//         cross-browser compatibility, and a commitment to staying abreast of
//         emerging technologies, ensuring an optimal user experience across
//         diverse devices and platforms.
//       </span>
//       <div className="skillBars">
//         <div className="skillBar">
//           <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
//           <div className="skillBarText">
//             <h2>UI/UX design</h2>
//             <p>This is temporary text.</p>
//           </div>
//         </div>

//         <div className="skillBar">
//           <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
//           <div className="skillBarText">
//             <h2>Web design</h2>
//             <p>This is temporary text.</p>
//           </div>
//         </div>

//         <div className="skillBar">
//           <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
//           <div className="skillBarText">
//             <h2>App design</h2>
//             <p>This is temporary text.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import Card from "./Card";
import "../css/Skills.css";
import React from "react";
import UIDesign from "../images/ui.jpg";
import WebDesign from "../images/web.jpg";
import AppDesign from "../images/app.jpg";

export default function Skills() {
  const skills = [
    {
      id: 1,
      H: "UI/UX Design",
      P: "bla bla",
      I: "UIDesign",
    },
    {
      id: 2,
      H: "Web Design",
      P: "bla bla",
      I: "WebDesign",
    },
    {
      id: 1,
      H: "App Design",
      P: "bla bla",
      I: "AppDesign",
    },
  ];

  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        A proficient front-end web developer combines expertise in HTML, CSS,
        and JavaScript frameworks to craft visually appealing and seamlessly
        functional websites. Their skill set extends to responsive design,
        cross-browser compatibility, and a commitment to staying abreast of
        emerging technologies, ensuring an optimal user experience across
        diverse devices and platforms.
      </span>
      <div>
        {skills.map((item) => (
          <Card skills={item} />
        ))}
      </div>
    </section>
  );
}
