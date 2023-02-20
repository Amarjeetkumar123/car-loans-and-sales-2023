import React from "react";

import {
  HiOutlineDocumentDuplicate,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineDocumentCheck,
} from "react-icons/hi2";
import { MdDone } from "react-icons/md";

const iconStyle = {
  fontSize: "4rem",
  margin: "10px 0px",
};

const pStyle = {
  fontSize: "14px",
};

const Fourth = () => {
  return (
    <div className="px-5 my-5 py-5">
      <h1 className="my-5 pb-4 text-center">Application Process</h1>

      <div className="row text-center">
        <div className="col">
          <HiOutlineDocumentDuplicate style={iconStyle} />
          <h5>Online Application</h5>
          <p className="text-muted" style={pStyle}>
            We will help to apply loan. we just required your basic details.
          </p>
        </div>
        <div className="col">
          <HiOutlineDocumentMagnifyingGlass style={iconStyle} />

          <h5>Documentation and Verification</h5>
          <p className="text-muted" style={pStyle}>We will assist you to submission of your documents.</p>
        </div>
        <div className="col">
          <HiOutlineDocumentCheck style={iconStyle} />

          <h5>Approval</h5>
          <p className="text-muted" style={pStyle}>your loan is sanctioned.</p>
        </div>
        <div className="col">
          <MdDone style={iconStyle} />
          <h5>Drive Away</h5>
          <p className="text-muted" style={pStyle}>Receive there amount in bank account and take your car.</p>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
