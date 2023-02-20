import React from "react";
import LVB09 from "../images/LVB-Web-09.png";
import LVB08 from "../images/LVB-Web-08.png";
import LVB07 from "../images/LVB-Web-07.png";
import { BsBagDash, BsCashStack, BsTags } from "react-icons/bs";
import {HiOutlineLifebuoy} from "react-icons/hi2"

const Fourth = () => {
  return (
    <>
      <div className="row px-5 my-5 pb-3">
        <p className="fs-3 text-center text-center mb-5">Happy Customers</p>

        <div className="col px-3 py-3 text-center">
          <img className="w-75" src={LVB09} alt="LVB-Web-09" />
          <p>
            Good people, good interest. Helped me to buy a Swift ZXI car. The
            processing time was very fast, there were no extra charges.
          </p>
          <h6>— Vijaya Kumar KK</h6>
          <p text-muted>Swift ZXI</p>
        </div>

        <div className="col px-3 py-3 text-center">
          <img className="w-75" src={LVB08} alt="LVB-Web-08" />
          <p>
            Good people, good interest. Helped me to buy a Swift ZXI car. The
            processing time was very fast, there were no extra charges.
          </p>
          <h6>— Vijaya Kumar KK</h6>
          <p text-muted>Swift ZXI</p>
        </div>

        <div className="col px-3 py-3 text-center">
          <img className="w-75" src={LVB07} alt="LVB-Web-07" />
          <p>
            Good people, good interest. Helped me to buy a Swift ZXI car. The
            processing time was very fast, there were no extra charges.
          </p>
          <h6>— Vijaya Kumar KK</h6>
          <p text-muted>Swift ZXI</p>
        </div>
      </div>

      {/* 2nd row  */}

      <div className="row border my-5">
        <div className="col my-5 d-flex align-items-center justify-content-evenly">
          <span>
            <BsBagDash className="fs-1 me-2" />
          </span>
          <div className="d-flex flex-column">
            <span className="fw-bold">10 Years</span>
            <span className="text-muted">Of Excellence in Loans</span>
          </div>
        </div>

        <div className="col my-5 d-flex align-items-center justify-content-evenly">
          <span>
            <BsCashStack className="fs-1 me-2" />
          </span>
          <div className="d-flex flex-column">
            <span className=" fw-bold">15+ Crore</span>
            <span className="text-muted">Auto Loan Disbursed</span>
          </div>
        </div>

        <div className="col my-5 d-flex align-items-center justify-content-evenly">
          <span>
            <BsTags className="fs-1 me-2" />
          </span>
          <div className="d-flex flex-column">
            <span className=" fw-bold">Offers</span>
            <span className="text-muted">Stay updated pay less</span>
          </div>
        </div>

        <div className="col my-5 d-flex align-items-center justify-content-evenly">
          <span>
            <HiOutlineLifebuoy className="fs-1 me-2" />
          </span>
          <div className="d-flex flex-column">
            <span className=" fw-bold">Compare</span>
            <span className="text-muted">Decode the right car</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fourth;
