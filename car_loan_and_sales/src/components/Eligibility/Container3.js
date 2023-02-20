import React from "react";

const Container3 = () => {
  return (
    <div className="container3 pb-2">
      <div className=" w-75 mx-auto my-5 px-5">
        <nav class="tabbable">
          <div class="nav nav-tabs py-2" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-first-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-first"
              type="button"
              role="tab"
              aria-controls="nav-first"
              aria-selected="true"
            >
              <span>Salaried individuals</span>
            </button>
            <button
              class="nav-link"
              id="nav-second-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-second"
              type="button"
              role="tab"
              aria-controls="nav-second"
              aria-selected="false"
            >
              <span>Self-employed individuals</span>
            </button>
            <button
              class="nav-link"
              id="nav-third-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-third"
              type="button"
              role="tab"
              aria-controls="nav-third"
              aria-selected="false"
            >
              <span>Self-employed non-individuals</span>
            </button>
            <button
              class="nav-link"
              id="nav-fourth-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-fourth"
              type="button"
              role="tab"
              aria-controls="nav-fourth"
              aria-selected="false"
            >
              <span>Car Loan Eligibility Calculator</span>
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-first"
            role="tabpanel"
            aria-labelledby="nav-first-tab"
          >
            <h2 className="mt-4">DOCUMENTS REQUIRED FOR USED CAR LOAN</h2>

            <h5 className="my-3">
              Self-employed individuals who are eligible for a Used Car Loan
            </h5>
            <ul>
              <li className="text-muted">Minimum 21 years of age</li>
              <li className="text-muted">
                Maximum 65 years of age at maturity
              </li>
              <li className="text-muted">
                Minimum Net Annual Business income of Rs. 2,00,000 p.a. for
                selected models and Rs. 3,50,000 p.a. for others.
              </li>
              <li className="text-muted">
                Minimum 2 years of employment in the same line of business
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="nav-second"
            role="tabpanel"
            aria-labelledby="nav-second-tab"
          >
            <h2 className="mt-4">DOCUMENTS REQUIRED FOR USED CAR LOAN</h2>

            <h5 className="my-3">
              Salaried individuals who are eligible for a Used Car Loan
            </h5>
            <ul>
              <li className="text-muted">Minimum 21 years of age</li>
              <li className="text-muted">
                Maximum 60 years of age at maturity (conditions apply)
              </li>
              <li className="text-muted">
                Minimum net annual salary of Rs 2,40,000 p.a. for certain models
                and Rs 3,00,000 p.a. for specific models
              </li>
              <li className="text-muted">
                Income elgibility based on latest salary slip/form16/ last 3
                months bank statements
              </li>
              <li className="text-muted">
                Minimum 1 year of continuous employment
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="nav-third"
            role="tabpanel"
            aria-labelledby="nav-third-tab"
          >
            <h2 className="mt-4">DOCUMENTS REQUIRED FOR USED CAR LOAN</h2>

            <h5 className="my-3">
              Self-employed non-individuals who are eligible for a Used Car Loan
              (partnership/huf/pvt ltd/ ltd/ trust/ societies)
            </h5>
            <ul>
              <li className="text-muted">Minimum 21 years of age</li>
              <li className="text-muted">
                Minimum Net Annual Business income or Rs. 2,50,000 p.a. for
                selected models and Rs. 3,50,000 p.a. for others
              </li>
              <li className="text-muted">
                Income eligibility based on latest 2 years Income Tax Returns
                and audited financials of 2 years along with computation of
                income
              </li>
              <li className="text-muted">
                Minimum 2 years of employment in the same line of business
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="nav-fourth"
            role="tabpanel"
            aria-labelledby="nav-fourth-tab"
          >
            <h2 className="mt-4">DOCUMENTS REQUIRED FOR USED CAR LOAN</h2>

            <h5 className="my-3">
              Use the Car Loan eligibility calculator to find out whether you
              can avail of a pre-owned car loan.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container3;
