import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../Assets/bg2.png";

import Typewriter from "./typewriter";
import About from "../routes/about";
import Education from "../routes/education";
import Skills from "../routes/skills";
import Projects from "../routes/projects";
import Testimonials from "../routes/testimonial";

function Home() {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const sentences = [
    "Hey, There! 👋",
    "This is Daniel Kariuki.",
    "A Web Designer.",
    "A Web Application Developer.",
    "A Graphics Designer.",
    "Hire Me!!!",
  ];

  return (
    <div className="container-fluid bg-dark ">
      <div
        className="row d-flex align-items-center justify-content-center flex-start"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
          <div className="myname text-dark">
            <h1 className=" slide-in-name display-1 fw-bolder">
              Daniel <span className="text-warning">Kariuki</span>
            </h1>
            <div
              className=" slide-in-name text-light"
              style={{ height: "100px" }}
            >
              <h4>
                <Typewriter sentences={sentences} speed={150} />
              </h4>
            </div>

            <a
              href="https://wa.me/+254798789477"
              className="btn btn-success slide-in "
            >
              Chat On WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="d-flex justify-content-center text-light">
          <span
            className={`toggle-text ${
              activeTab === "about" ? "text-warning" : ""
            }`}
            onClick={() => handleTabClick("about")}
            style={{ cursor: "pointer" }}
          >
            <span className="  fw-bolder h6 ">About</span>
          </span>
          <span className="ms-2"></span>
          <span
            className={`toggle-text ${
              activeTab === "education" ? "text-warning" : ""
            }`}
            onClick={() => handleTabClick("education")}
            style={{ cursor: "pointer" }}
          >
            <span className="  fw-bolder h6 ">Education</span>
          </span>
          <span className="ms-2"></span> {/* Add space */}
          <span
            className={`toggle-text ${
              activeTab === "skills" ? "text-warning " : ""
            }`}
            onClick={() => handleTabClick("skills")}
            style={{ cursor: "pointer" }}
          >
            <span className="fw-bolder h6">Skills</span>
          </span>
          <span className="ms-2"></span> {/* Add space */}
          <span
            className={`toggle-text ${
              activeTab === "projects" ? "text-warning " : ""
            }`}
            onClick={() => handleTabClick("projects")}
            style={{ cursor: "pointer" }}
          >
            <span className="fw-bolder h6">Projects</span>
          </span>
        </div>
        <div className="mt-4">
          {activeTab === "about" ? <About /> : null}
          {activeTab === "education" ? <Education /> : null}
          {activeTab === "skills" ? <Skills /> : null}
          {activeTab === "projects" ? <Projects /> : null}
        </div>
      </div>

      <Testimonials />

      <footer className="text-center text-secondary mt-3 p-3 border-top">
        <p className=" font-weight-bold">
          &copy; 2024 DanielK. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
