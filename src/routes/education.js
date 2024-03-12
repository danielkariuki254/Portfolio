import React from "react";
import uoe from "../Assets/uoe1.jpg";
import kangaru from "../Assets/kangaru.webp";

function Education() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center ">
        <div className="schoolE   rounded-5 p-3 col-lg-4 col-md-4 col-sm-12 col-12 mt-1">
          <div className="aboutschool">
            <span className="text-secondary fw-bolder text-center h6 fs-5 ms-3">
              UNIVERSITY OF ELDORET (UoE).
            </span>
            <br></br>
            <span className="text-secondary text-center h6 fs-6 ms-3">
              2020-2024 April.
            </span>
            <br></br>
            <span className="text-secondary text-center h6 fs-6 ms-3">
              <i>Bch. Degree In COMPUTER SCIENCE.</i>
            </span>
            <img
              className="rounded-5 mt-3"
              src={uoe}
              alt="uoe"
              style={{
                width: "100%",
                height: "265px",
              }}
            />
          </div>
        </div>
        <div className="schoolK  rounded-5 p-3 col-lg-4 col-md-4 col-sm-12 col-12 mt-1">
          <div className="aboutschool">
            <span className="text-secondary fw-bolder text-center h6 fs-5 ms-3">
              KANGARU SCHOOL.
            </span>
            <br></br>
            <span className="text-secondary text-center h6 fs-6 ms-3">
              2016-2019 Nov.
            </span>
            <br></br>
            <span className="text-secondary text-center h6 fs-6 ms-3">
              <i>Kenya Cert' Of Sec' Education (KCSE).</i>
            </span>
            <img
              className="rounded-5 mt-3"
              src={kangaru}
              alt="uoe"
              style={{
                width: "100%",
                height: "265px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
