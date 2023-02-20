import React from 'react'
import { GrDocumentText,GrDocument ,GrDocumentVerified} from "react-icons/gr"
import {AiOutlineRedo} from "react-icons/ai"
import {HiOutlineReceiptPercent} from "react-icons/hi2"
import {GiTakeMyMoney} from "react-icons/gi"
 

const iconStyle = {
  fontSize: "4rem",
  margin: "10px 0px",
};

const pStyle = {
  fontSize: "14px",
};


const Fifth = () => {
    return (
      <>
        <div
          className="text-center p-5 my-5"
          style={{ backgroundColor: "#eee" }}
        >
          <h2 className='text-muted mb-5'>6 Reasons to Choose Us for Taking a Used Car Loan</h2>
          <div className="row pt-5">
            <div className="col mb-5">
              <GrDocumentText style={iconStyle} />
              <h5>Minimum paperwork</h5>
              <p className="text-muted" style={pStyle}>
                We will help you to apply throughout the document
              </p>
            </div>
            <div className="col mb-5">
              <AiOutlineRedo style={iconStyle} />
              <h5>Repayment</h5>
              <p className="text-muted" style={pStyle}>
                We remind you to repayment on time
              </p>
            </div>
            <div className="col mb-5">
              <HiOutlineReceiptPercent style={iconStyle} />
              <h5>Competitive interest rates</h5>
              <p className="text-muted" style={pStyle}>
                Help you to select the best intereste rates.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col mb-5">
              <GiTakeMyMoney style={iconStyle} />
              <h5>High loan amount</h5>
              <p className="text-muted" style={pStyle}>
                Get upto 95% of loan amount.
              </p>
            </div>

            <div className="col mb-5">
              <GrDocument style={iconStyle} />
              <h5>Minimum documents</h5>
              <p className="text-muted" style={pStyle}>
                minimal documentation for your request.
              </p>
            </div>
            <div className="col mb-5">
              <GrDocumentVerified style={iconStyle} />
              <h5>Instant online approval</h5>
              <p className="text-muted" style={pStyle}>
                We process your loan amount on your required time.
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Fifth
