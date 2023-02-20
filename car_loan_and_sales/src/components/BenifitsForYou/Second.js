import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Second = () => {
    return (
      <Fragment>
        <div className=" w-75 row py-5 my-5 mx-auto ">
          <h1 className="text-center py-5">WHAT IS A USED CAR LOAN?</h1>
          <p style={{fontSize:"18px"}}>
            Opting for a used car loan is a smart, value-for-money purchase. We
            offer used car loans for a wide collection of cars ranging from
            hatchbacks & SUVs to premium sedans. We extend loans up to 95% loan
            on your car value and provide flexible EMI repayment options, and
            quick disbursal of loans which makes the best choice for financing
            your car.
          </p>
          <p style={{ fontStyle: "italic" }}>
            <strong>Disclaimer:</strong> We Provide you Service to get Car Loans
            at the indicative interest rates as per respective banks pertain to
            loans availed for cars which are for personal use. For loans for
            cars which are for commercial use, interest rates may differ.
            Interest rates may differ from time to time at the discretion of
            respective banks. Terms and conditions apply.
          </p>
          <Link to="/applyNow" className="mx-auto w-25 my-5 text-center">
            <button className="btn btn-dark px-4 py-2 fs-4 rounded-pill ">
              Apply Now
            </button>
          </Link>
        </div>
      </Fragment>
    );
}

export default Second