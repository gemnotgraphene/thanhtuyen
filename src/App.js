import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";

import Project1 from "./components/Projects/Project1"
import Project2 from "./components/Projects/Project2"
import Project3 from "./components/Projects/Project3"
import Project4 from "./components/Projects/Project4"
import Project5 from "./components/Projects/Project5";
import Project6 from "./components/Projects/Project6";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/project1" element={<Project1 />} />
          <Route path="/project/project2" element={<Project2 />} />
          <Route path="/project/project3" element={<Project3 />} />
          <Route path="/project/project4" element={<Project4 />} />
          <Route path="/project/project5" element={<Project5 />} />
          <Route path="/project/project6" element={<Project6 />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
