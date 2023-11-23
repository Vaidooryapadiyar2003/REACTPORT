import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";
import logoImage from "../images/logo.jpg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      console.log("hyyy about");
    }
  }, [location]);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const closeSidebar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <nav>
      <label className="hamburger-btn" onClick={toggleNavbar}>
        {isNavbarOpen ? <FaTimes /> : <FaBars />}
      </label>

      <label className="logo">
        <img src={logoImage} alt="Logo" />
      </label>
      <ul className={isNavbarOpen ? "show" : ""}>
        {location.pathname === "/" ? (
          " "
        ) : (
          <li className="desktop" onClick={closeSidebar}>
            <Link className="active" to="/">
              HOME
            </Link>
          </li>
        )}
        {location.pathname === "/about" ? (
          " "
        ) : (
          <li className="desktop" onClick={closeSidebar}>
            <Link className="active" to="/about">
              ABOUT
            </Link>
          </li>
        )}
        {location.pathname === "/Skills" ? (
          " "
        ) : (
          <li className="desktop" onClick={closeSidebar}>
            <Link className="active" to="/Skills">
              SKILLS
            </Link>
          </li>
        )}
        {location.pathname === "/project" ? (
          " "
        ) : (
          <li className="desktop" onClick={closeSidebar}>
            <Link className="active" to="/project">
              PROJECTS
            </Link>
          </li>
        )}
        {location.pathname === "/contact" ? (
          " "
        ) : (
          <li className="desktop" onClick={closeSidebar}>
            <Link className="active" to="/contact">
              CONTACT ME
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
