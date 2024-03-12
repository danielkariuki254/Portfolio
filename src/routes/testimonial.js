import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const testimonialsData = [
  {
    name: "Dylis",
    image: "dylis.jpg",
    occupation: "Professional Teacher",
    text: "Daniel, a computer science pro, excels in translating complex concepts into practical solutions. He understands project needs and is committed to excellence, enhancing business outcomes. I endorse him wholeheartedly for his consistent delivery of excellence in computer science.",
  },
  {
    name: "Janet",
    image: "janet2.jpg",
    occupation: "Entrepreneur",
    text: "Daniel, an exceptional computer science professional, showcases impressive problem-solving skills and deep knowledge in the field. He consistently offers innovative solutions to complex technical problems, leaving a significant impact on our company. I highly recommend him for his top-notch expertise in computer science.",
  },
  {
    name: "Winnie",
    image: "winnie.jpg",
    occupation: "Entrepreneur",
    text: "Daniel's collaboration revolutionized our business, highlighting innovation and technological proficiency. His IT expertise propels our digital evolution with remarkable solutions. Daniel's exemplary work ethic and problem-solving skills make him the professional to elevate your business.",
  },
  {
    name: "Purity",
    image: "purie.jpg",
    occupation: "Nurse",
    text: "Daniel's expertise in computer science revolutionized our healthcare facility. His innovative solutions streamlined our work, improving efficiency in managing patient data and records. I wholeheartedly recommend him for his vital role in advancing healthcare systems.",
  },
];

const TestimonialsSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((current) =>
      current === testimonialsData.length - 1 ? 0 : current + 1
    );
  }, []);

  const prevTestimonial = () => {
    setCurrentTestimonial((current) =>
      current === 0 ? testimonialsData.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(nextTestimonial, 7000);

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [nextTestimonial]);

  const testimonial = testimonialsData[currentTestimonial];

  return (
    <div className="container text-center text-white mt-4">
      <h2 className="text-warning">Testimonials</h2>
      <div className="testimonials-slider d-flex flex-column align-items-center mt-4">
        <img
          className="testimonial-image rounded-circle"
          src={require(`../Assets/${testimonial.image}`)}
          alt={testimonial.name}
          width="150"
          height="150"
        />
        <p className="h1 text-light mt-2">{testimonial.name}</p>
        <p className="h4 text-warning">{testimonial.occupation}</p>
        <FontAwesomeIcon
          className="fs-bolder display-5 text-warning ml-2"
          icon={faQuoteLeft}
        />
        <div
          className="row justify-content-center align-items-center "
          style={{ height: "30vh" }}
        >
          <div className="col-lg-6 col-md-6 col-sm-10 mx-2 ">
            <p className="rounded-6" style={{ overflowY: "hidden" }}>
              {testimonial.text}
            </p>
          </div>
        </div>
      </div>
      <div className="slider-controls d-flex justify-content-center">
        <div className="me-4 fw-bolder">
          <FontAwesomeIcon
            className="fs-5 fw-bolder text-warning"
            onClick={prevTestimonial}
            icon={faAngleLeft}
          />
        </div>

        <div className="ms-4 fw-bolder ">
          <FontAwesomeIcon
            className="fs-5 fw-bolder text-warning"
            onClick={nextTestimonial}
            icon={faAngleRight}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
