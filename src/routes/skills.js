import React from "react";

function Skills() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className=" webDes p-2 col-lg-4 col-md-4 col-sm-12 col-12 mt-1 border-bottom">
          <div className="text-light text-center">
            <h5 className="text-secondary">WEB DESIGNER (MERN STACK).</h5>
            <div className="d-flex flex-column align-items-center">
              <h6>
                <span className="text-warning fs-3 me-1">&#10003;</span> React
                js
              </h6>
              <h6>
                <span className=" text-warning fs-3 ms-3 me-1">&#10003;</span>{" "}
                Express js
              </h6>
              <h6>
                <span className="text-warning fs-3 ms-3 me-1">&#10003;</span>{" "}
                MongoDB
              </h6>
              <h6>
                <span className=" text-warning fs-3 me-1">&#10003;</span> Node
                js
              </h6>
            </div>
          </div>
        </div>

        <div className="webDev p-2 col-lg-4 col-md-4 col-sm-12 col-12 mt-1 border-bottom">
          <div className="text-light text-center">
            <h5 className="text-secondary">WEB APP DEV (MERN STACK).</h5>
            <div className="d-flex flex-column align-items-center">
              <h6>
                <span className="text-warning fs-3 me-1 ms-5">&#10003;</span>{" "}
                React Native
              </h6>
              <h6>
                <span className=" text-warning fs-3 ms-3 me-1">&#10003;</span>{" "}
                Express js
              </h6>
              <h6>
                <span className="text-warning fs-3 ms-3 me-1">&#10003;</span>{" "}
                MongoDB
              </h6>
              <h6>
                <span className=" text-warning fs-3 me-1">&#10003;</span> Node
                js
              </h6>
            </div>
          </div>
        </div>

        <div className="graphics p-2 col-lg-4 col-md-4 col-sm-12 col-12 mt-1 border-bottom">
          <div className="text-light text-center">
            <h5 className="text-secondary">GRAPHICS DESIGNER .</h5>
            <div className="d-flex flex-column align-items-center">
              <h6>
                <span className="text-warning fs-3 me-2">&#10003;</span> Logos
              </h6>
              <h6>
                <span className=" text-warning fs-3 ms- me-2">&#10003;</span>
                Flyers
              </h6>
              <h6>
                <span className="text-warning fs-3 ms- me-2">&#10003;</span>
                Posters
              </h6>
              <h6>
                <span className=" text-warning fs-3 me-2 ms-3">&#10003;</span>
                Bronchers
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
