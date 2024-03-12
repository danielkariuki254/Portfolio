import React from "react";
import { Carousel } from "react-bootstrap";
import background1 from "../Assets/marketplace2.jpg";
import background2 from "../Assets/pc1.jpg";
import background3 from "../Assets/phoneplace.webp";
import background4 from "../Assets/compbg.jpg";
import { FaEye } from "react-icons/fa";
import "../App.css";

function Projects() {
  return (
    <div className="container-fluid">
      <Carousel>
        <Carousel.Item className=" col-lg-6 col-md-6 col-sm-12 col-12 ">
          <div className="d-flex flex-column align-items-center justify-content-center col-lg-6 col-md-6 col-sm-12 col-12 mx-auto text-center">
            <div
              className="comingsoon mb-3 "
              style={{
                backgroundImage: `url(${background1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "50vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="name">
                <h1 className="mb-2 text-light fw-bolder display-1">
                  MarketPlace
                </h1>
              </div>
              <div className="description">
                <p className="mb-2  text-light px-2">
                  Modern marketplace web project offering diverse products,
                  seamless transactions, and user-friendly experience for online
                  shoppers worldwide.
                </p>
              </div>
              <a
                href="https://market-place-dan202.netlify.app/"
                className="btn btn-warning"
              >
                <FaEye className="me-2" />
                View
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="d-flex flex-column align-items-center col-lg-6 col-md-6 col-sm-12 col-12 mx-auto text-center">
            <div
              className="comingsoon mb-3"
              style={{
                backgroundImage: `url(${background2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "50vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="name">
                <h1 className="mb-2 text-light fw-bolder display-1">
                  PoultryCare
                </h1>
              </div>
              <div className="description">
                <p className="mb-2 px-2 text-light">
                  Comprehensive online platform offering solutions for poultry
                  care, including information, products, and community support
                  for poultry enthusiasts.
                </p>
              </div>
              <a
                href="https://poultry-care-dan202.netlify.app/"
                className="btn btn-warning"
              >
                <FaEye className="me-2" />
                View
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="d-flex flex-column align-items-center col-lg-6 col-md-6 col-sm-12 col-12 mx-auto text-center">
            <div
              className="comingsoon mb-3"
              style={{
                backgroundImage: `url(${background3})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "50vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="name">
                <h1 className="mb-2 text-light fw-bolder display-1">
                  PhonePlace
                </h1>
              </div>
              <div className="description">
                <p className="mb-2 px-2 text-light">
                  Your premier destination for mobile devices, accessories, and
                  expert guidance, delivering top-notch service and cutting-edge
                  technology.
                </p>
              </div>
              <a
                href="https://phone-place-dan202.netlify.app/"
                className="btn btn-warning"
              >
                <FaEye className="me-2" />
                View
              </a>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="d-flex flex-column align-items-center  col-lg-6 col-md-6 col-sm-12 col-12 mx-auto text-center">
            <div
              className="comingsoon mb-3"
              style={{
                backgroundImage: `url(${background4})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "50vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="name">
                <h1 className="mb-2 text-light fw-bolder display-4">
                  CurrencyConverter
                </h1>
              </div>
              <div className="description">
                <p className="mb-2 px-2 text-light">
                  Simplify global transactions with our intuitive tool, offering
                  real-time exchange rates and seamless currency conversions for
                  users worldwide.
                </p>
              </div>
              <a
                href="https://currency-converter-dan202.netlify.app/"
                className="btn btn-warning"
              >
                <FaEye className="me-2" />
                View
              </a>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects;
