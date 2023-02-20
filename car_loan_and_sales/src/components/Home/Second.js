import React, { Fragment } from "react";
import icon1 from "../images/CLS-Web-06.png";
import icon2 from "../images/CLS-Web-07.png";
import icon3 from "../images/CLS-Web-05.png";
const Second = () => {
  return (
    <Fragment>
      <div className="d-flex flex-column">
        <div className=" text-center py-5 mt-5">
          <p className="display-6 fw-bold pt-5">Get a Loan in 3 Simple Steps</p>
          <p className="text-muted">
            Getting a loan on your car is Quick, Simple and Hassle Free
          </p>
        </div>

        <div className="row mb-5 py-5 ">
          <div className="col px-3 py-3 text-center">
            <img className="w-0 py-3" src={icon1} alt="..." />
            <h5>Share car details</h5>
            <p className="text-muted">Fill a simple form about your details</p>
          </div>
          <div className="col px-3 py-3 text-center">
            <img className="w-0 py-3" src={icon3} alt="..." />
            <h5>Check quotes and eligibility</h5>
            <p className="text-muted">Get instant car loan quotes</p>
          </div>
          <div className="col px-3 py-3 text-center">
            <img className="w-0 py-3" src={icon2} alt="..." />
            <h5>Leave the rest to us</h5>
            <p className="text-muted">Our loan consultant assist you</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Second;
