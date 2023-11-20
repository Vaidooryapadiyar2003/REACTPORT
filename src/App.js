import React from "react";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Certifications from "./component/Certifications";
import Skills from "./component/Skills";
import Home from "./component/Home";
import Contact from "./component/Contact";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import "../src/App.css";

const App = () => {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Certifications" element={<Certifications />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
