import React from "react";

const Box2 = () => {
  return (
    <div className="w-75 mx-auto">
      <h1 className="text-center mb-5">Miscellaneous Charges</h1>
      <hr />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">PRODUCTS/TYPE OF CHARGES</th>
            <th scope="col">USED CAR/NEW CAR</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-muted">
            <td>Bounce charge</td>
            <td>₹500</td>
          </tr>
          <tr className="text-muted">
            <td>Cheque Swap charges (per swap)</td>
            <td>₹500</td>
          </tr>
          <tr className="text-muted">
            <td>Cancellation & Rebooking charges</td>
            <td>₹6500 towards Cancellation.</td>
          </tr>
          <tr className="text-muted">
            <td>Foreclosure / Prepayment charges*</td>
            <td> starting from 7% of principle outstanding amount</td>
          </tr>
          <tr className="text-muted">
            <td>Loan re-scheduling charges</td>
            <td>NA</td>
          </tr>
          <tr className="text-muted">
            <td>Physical Repayment Schedule</td>
            <td>₹500</td>
          </tr>
          <tr className="text-muted">
            <td>Physical Statement of Account</td>
            <td>₹500</td>
          </tr>
          <tr className="text-muted">
            <td>Document retrieval charges</td>
            <td>₹500</td>
          </tr>
          <tr className="text-muted">
            <td>Stamp Charges</td>
            <td>As per actuals</td>
          </tr>
          <tr className="text-muted">
            <td>Processing fees</td>
            <td>Up to 3.5% of the total amount</td>
          </tr>
          <tr className="text-muted">
            <td>Duplicate NOC</td>
            <td>₹500 + GST</td>
          </tr>
          <tr className="text-muted">
            <td>Part Payment charges</td>
            <td> Part Payment is not allowed</td>
          </tr>
          <tr className="text-muted">
            <td>Initial Money Deposit/ Application Fees (Non-refundable)</td>
            <td>NA</td>
          </tr>
          <tr className="text-muted">
            <td>EBC Replacement Fee (if EBC Applicable)</td>
            <td>₹100</td>
          </tr>
          <tr className="text-muted">
            <td>EBC & Push Card Annual Fee (if Applicable)</td>
            <td>₹99</td>
          </tr>
          <tr className="text-muted">
            <td>EMI Pickup/ Collection Charges</td>
            <td>₹350</td>
          </tr>
          <tr className="text-muted">
            <td>Admin Charges(If Applicable)</td>
            <td>₹2500</td>
          </tr>
          <tr className="text-muted">
            <td>Valuation Charges(If Applicable)</td>
            <td>₹600</td>
          </tr>
          <tr className="text-muted">
            <td>PDD Charges</td>
            <td>₹500</td>
          </tr>
          <tr className="text-muted">
            <td>Legal/Collections/ Repossession & Incidental Charges</td>
            <td> As per actuals</td>
          </tr>
          <tr className="text-muted">
            <td>
              Late payment/Penal charges/ Default interest/Overdue (per month)
            </td>
            <td> min 2% per month of the unpaid</td>
          </tr>
          <tr className="text-muted">
            <td colspan="2">
              *Charges above are exclusive of GST and varies as per the bank .
              It mentioned as for customer reference.
            </td>
          </tr>
        </tbody>
      </table>

      <div class="accordion my-5 py-5" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How is Your Used Car Loan Interest Rate Calculated?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              The mathematical formula for calculating used car loan EMI, which
              is equal to the principal loan amount + the used car loan
              interest, is:
              <br /> <br />
              [P x R x (1+R)^N]/[(1+R)^N-1] <br />
              <br />
              where : <br />
              <br />P stands for the Principal Amount <br />
              <br />R stands for Rate of Interest <br />
              <br />N stands for the Tenure of the Loan in months.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box2;
