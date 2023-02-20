import React, { Fragment } from "react";
import { BsClockHistory } from "react-icons/bs";
import { RiShieldFlashLine } from "react-icons/ri";
import { CgOptions } from "react-icons/cg";
import { HiOutlineReceiptPercent } from "react-icons/hi2";

const iconStyle = {
    fontSize: "4rem",
    margin:"10px 0px"
};

const pStyle = {
  fontSize: "14px"
};

const Third = () => {
  return (
    <Fragment>
      <div
        className="row my-5 d-flex justify-content-between px-5 py-5"
        style={{
          backgroundColor: "#eee",
        }}
      >
        <div className="col-5">
          <h1 className="my-5">KEY FEATURES</h1>

          <p className="text-muted" style={pStyle}>
            Loan Amount 1,00,000 – 50,00,000
          </p>

          <p className="text-muted pt-5 mt-5" style={pStyle}>
            Loan Tenure 12-60 months
            <br></br>
            <br /> Intereste rate starting a 15% for used cars
          </p>
        </div>

        <div className="col-7">
          <div className="row">
            <div className="col-md-6 col-sm-12 text-center">
              <BsClockHistory style={iconStyle} />
              <h5>Flexible Tenure: </h5>

              <p className="text-muted" style={pStyle}>
                Easy ways to repay your loan over a period of 60 months.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 text-center">
              <RiShieldFlashLine style={iconStyle} />
              <h5>Quick Processing: </h5>

              <p className="text-muted" style={pStyle}>
                online application process that to with a minimal paperwork, you
                can get your car loan in time. You just need to fill in our
                application form and your request is our order we will take
                care.
              </p>
            </div>

            <div className="col-md-6 col-sm-12 text-center">
              <CgOptions style={iconStyle} />
              <h5>Flexi EMI Options:</h5>
              <p className="text-muted" style={pStyle}>
                Our Flexi EMI Car Loans allow you to repay your loan according
                to your convenience.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 text-center">
              <HiOutlineReceiptPercent style={iconStyle} />
              <h5>Competitive interest rates:</h5>
              <p className="text-muted" style={pStyle}>
                interest rates we suggest you the best among all lenders ;
                offers and tools that will benefit you the most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Third;
