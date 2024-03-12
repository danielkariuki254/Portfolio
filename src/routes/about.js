import React, { useEffect, useState } from "react";
import bg from "../Assets/daniel.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY + window.innerHeight;
      const offset = document.querySelector(".slide-in").offsetTop;
      if (top > offset && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 col-sm-12 col-12 text-center">
          <div
            className={`slide-in-about card p-3 bg-dark border ${
              isVisible ? "slide-in-visible" : ""
            }`}
          >
            <img
              className="testimonial-image rounded-circle mx-auto"
              src={bg}
              width="100"
              height="100"
              alt="about"
            />

            <h2 className="text-warning mt-2">About Daniel</h2>
            <p
              className="text-secondary"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Daniel is a dynamic professional with a Bachelor's degree in
              Computer Science, specializing in web design and development, and
              also some networking basics. Proficient in the MERN stack and
              React Native, he crafts engaging and responsive web applications
              and mobile apps. Daniel's creative flair extends to graphic
              design, where he excels in producing captivating logos, posters,
              and flyers. With a blend of technical expertise and artistic
              vision, Daniel consistently delivers high-quality work that
              exceeds expectations, driving digital experiences to new heights.
              <h6 className="text-light mt-1">
                Let's Bring Your Vision To Life.
              </h6>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
