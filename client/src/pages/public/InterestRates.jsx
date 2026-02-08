import PageHeader from '../../components/common/PageHeader';
import Accordion from '../../components/common/Accordion';

const InterestRates = () => {
  return (
    <div>
      <PageHeader title="Interest Rates" subtitle="Know the current used car loan interest rates" />

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold">What are the Current Used Car Loan Interest Rates?</h2>
          <p className="text-gray-600 mt-4">
            The used car loan interest rates are dependent on various factors including cost of funds, customer
            credentials, geography, asset, tenor, and discounts offered in the market. Besides that, your credit
            profile, monthly income, and repayment capacity also play a pivotal role. CLS ensures that you get a
            transparent and good deal at the time of availing of low-interest-rate used car loans. Our second-hand
            car loan interest rates are competitive in the market, starting at just 15%.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Miscellaneous Charges</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">PRODUCTS/TYPE OF CHARGES</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">USED CAR/NEW CAR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-600">
                <tr><td className="px-6 py-3">Bounce charge</td><td className="px-6 py-3">₹500</td></tr>
                <tr><td className="px-6 py-3">Cheque Swap charges (per swap)</td><td className="px-6 py-3">₹500</td></tr>
                <tr><td className="px-6 py-3">Cancellation & Rebooking charges</td><td className="px-6 py-3">₹6500 towards Cancellation.</td></tr>
                <tr><td className="px-6 py-3">Foreclosure / Prepayment charges*</td><td className="px-6 py-3">starting from 7% of principle outstanding amount</td></tr>
                <tr><td className="px-6 py-3">Loan re-scheduling charges</td><td className="px-6 py-3">NA</td></tr>
                <tr><td className="px-6 py-3">Physical Repayment Schedule</td><td className="px-6 py-3">₹500</td></tr>
                <tr><td className="px-6 py-3">Physical Statement of Account</td><td className="px-6 py-3">₹500</td></tr>
                <tr><td className="px-6 py-3">Document retrieval charges</td><td className="px-6 py-3">₹500</td></tr>
                <tr><td className="px-6 py-3">Stamp Charges</td><td className="px-6 py-3">As per actuals</td></tr>
                <tr><td className="px-6 py-3">Processing fees</td><td className="px-6 py-3">Up to 3.5% of the total amount</td></tr>
                <tr><td className="px-6 py-3">Duplicate NOC</td><td className="px-6 py-3">₹500 + GST</td></tr>
                <tr><td className="px-6 py-3">Part Payment charges</td><td className="px-6 py-3">Part Payment is not allowed</td></tr>
                <tr><td className="px-6 py-3">Initial Money Deposit/ Application Fees (Non-refundable)</td><td className="px-6 py-3">NA</td></tr>
                <tr><td className="px-6 py-3">EBC Replacement Fee (if EBC Applicable)</td><td className="px-6 py-3">₹100</td></tr>
                <tr><td className="px-6 py-3">EBC & Push Card Annual Fee (if Applicable)</td><td className="px-6 py-3">₹99</td></tr>
                <tr><td className="px-6 py-3">EMI Pickup/ Collection Charges</td><td className="px-6 py-3">₹350</td></tr>
                <tr><td className="px-6 py-3">Admin Charges(If Applicable)</td><td className="px-6 py-3">₹2500</td></tr>
                <tr><td className="px-6 py-3">Valuation Charges(If Applicable)</td><td className="px-6 py-3">₹600</td></tr>
                <tr><td className="px-6 py-3">PDD Charges</td><td className="px-6 py-3">₹500</td></tr>
                <tr><td className="px-6 py-3">Legal/Collections/ Repossession & Incidental Charges</td><td className="px-6 py-3">As per actuals</td></tr>
                <tr><td className="px-6 py-3">Late payment/Penal charges/ Default interest/Overdue (per month)</td><td className="px-6 py-3">min 2% per month of the unpaid</td></tr>
                <tr><td className="px-6 py-3" colSpan={2}>*Charges above are exclusive of GST and varies as per the bank. It mentioned as for customer reference.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <Accordion
              items={[
                {
                  question: 'How is Your Used Car Loan Interest Rate Calculated?',
                  answer: (
                    <div>
                      <p>The mathematical formula for calculating used car loan EMI is:</p>
                      <p className="font-mono my-3">[P x R x (1+R)^N]/[(1+R)^N-1]</p>
                      <p>where:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>P stands for the Principal Amount</li>
                        <li>R stands for Rate of Interest</li>
                        <li>N stands for the Tenure of the Loan in months.</li>
                      </ul>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterestRates;
