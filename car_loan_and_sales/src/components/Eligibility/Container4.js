import React from "react";

const Container4 = () => {
  return (
    <div className="w-75 mx-auto my-5 px-5">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button fw-semibold text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What are Factors Affecting Your Used Car Loan Eligibility?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="mb-3 ulTextSize">
                Your used car loan eligibility is dependent upon the following
                factors –
              </p>
              <ul className="ulTextSize">
                <li>
                  <strong>Income - </strong>The higher your monthly income, the
                  higher will be your eligibility for a used car loan. Meaning,
                  you can borrow a large principal amount.
                </li>
                <li>
                  <strong>CIBIL or Credit Score – </strong>Unpaid loans are a
                  huge red flag and may make you ineligible to borrow a used car
                  loan as opposed to a spot-free repayment pattern.
                </li>
                <li>
                  <strong>Outstanding Loan – </strong>Unpaid loans are a huge
                  red flag and may make you ineligible to borrow a used car loan
                  as opposed to a spot-free repayment pattern.
                </li>
                <li>
                  <strong>Work Stability – </strong>Having a stable source of
                  income increases your loan eligibility whereas lenders may
                  altogether reject your used car loan application in case of
                  frequent job hopping or irregular business ROI.Tata Capital
                  will run a used car loan eligibility check before approving
                  and sanctioning your loan.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed fw-semibold text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Factors Affecting Used Car Loan Interest Rates
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="mb-3 ulTextSize">
                Some of the main factors that affect the used car loan interest
                rates are:
              </p>
              <ul className="ulTextSize">
                <li>
                  <strong>Debt-to-Income Ratio: </strong>Your debt-to-income
                  ratio determines whether you can pay the EMIs on time. Your
                  application will be rejected, or the interest rates will be
                  high if your debt-to-income ratio is high.
                </li>
                <li>
                  <strong>Repayment Tenure: </strong> Lenders offer low-interest
                  rates in case you opt for a longer tenure. However, you will
                  end up paying more interest. Even though the interest rates
                  are high for a shorter tenure, the overall amount that you pay
                  for the car will be low. So, always check the EMI before
                  opting for the repayment tenure.
                </li>
                <li>
                  <strong>Increase the down payment: </strong>Lenders offer low
                  pre-owned car loan interest rates if you make high down
                  payment. Moreover, your EMIs will also reduce since the
                  principal amount is low. A high down payment also shows
                  lenders that you are financially sound and can repay the loan.
                </li>
                <li>
                  <strong>Income: </strong>Individuals with a steady income and
                  a stable occupation can get a used car loan with a
                  low-interest rate. The company you work for is also considered
                  when determining the interest rates on a used car loan.
                </li>
                <li>
                  <strong>Credit score: </strong>Individuals with a good credit
                  score are provided loans with a lower interest rate. Your loan
                  application will be rejected, or the interest rates will be
                  high if the credit score is low.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed fw-semibold text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How Can I be Eligible to Avail a Used Car Loan?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="ulTextSize">
                Whether you’re a salaried or a self-employed individual, you can
                meet used car loan eligibility by maintaining a good CIBIL score
                of 750 or above. However, other eligibility factors may be a
                little different. For instance – salaried individuals need to be
                between 21 and 60 years, have a minimum monthly income of Rs.
                20,000 and have work stability for at least a year. On the other
                hand, self-employed individuals must be between 21 and 65 years
                of age, have an annual business income of Rs. 2 lakhs, and a
                stable business for a minimum of three years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container4;
