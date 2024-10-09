import React, { Fragment } from "react";
import cars from "../images/cars.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const First = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Fragment>
      <div
        className="row ps-5  d-flex align-items-center first-container"
        style={{ backgroundColor: "#d90429", height: "550px" }}
      >
        <div className="col-5 d-flex justify-content-around flex-column align-items-start">
          <p
            className="mb-4 fw-bold "
            style={{ color: "#fca311", letterSpacing: "2px" }}
          >
            CAR LOANS
          </p>

          <p
            className="mb-5 display-5 fw-semibold"
            style={{ color: "#fff", letterSpacing: "2px" }}
          >
            Easy Funding to <br />
            get the car you want
          </p>

          <div className=" mt-4 fw-semibold">
            <Link
              className="btn btn-light me-3 "
              to={"/applyNow"}
            >
              Get Loan Now
            </Link>

            <Link className="btn btn-dark ms-3" to="/EMI">
              EMI Calculator
            </Link>
          </div>
        </div>

        <div className="col-7">
          <img style={{ width: "100%" }} src={cars} alt="carsImage" />
        </div>
      </div>
    </Fragment>
  );
};

export default First;
