import React from "react";

const Container2 = () => {
  return (
    <div className="w-75 mx-auto my-5 px-5 py-4">
      <h1 className="my-4">
        Eligibility and Documents Required for Used Car Loan
      </h1>
      <p className="fw-semibold text-decoration-underline">
        General Eligibility requirements
      </p>
      <ul className="mb-3 ulTextSize">
        <li>
          Minimum 21 years of age and Maximum 65 years of age at maturity
          (conditions apply)
        </li>
        <li>
          Income – The income of the applicant must be at least Rs. 20,000 per
          month (for salaried individuals) and Rs. 2 lakhs per annum (for
          self-employed individuals).
        </li>

        <li>Minimum 1 year of continuous employment</li>
      </ul>
      <p className="fw-semibold text-decoration-underline">
        General used car loan documents
      </p>
      <ul className="mb-3 ulTextSize">
        <li>
          Photo Identity Proof documents – Voter’s ID/Passport/PAN Card/Driving
          License/Aadhaar Card
        </li>
        <li>
          Income proof of latest salary slip/form16/ last 3 months bank
          statements
        </li>

        <li>
          Address Proof documents – Ration Card/Electricity Bill/Passport, Copy
          of Utility Bill/Bank Statements/Property Registration
          documents/Property Tax Receipt
        </li>
        <li>Copy of Vehicle Registration Certificate</li>
        <li>Copy of telephone or mobile bill</li>
        <li>Copy of signature along with proof</li>
      </ul>
    </div>
  );
};

export default Container2;
