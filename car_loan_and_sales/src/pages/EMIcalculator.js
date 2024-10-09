import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./EmiCalculator.css";

function EMICalculator() {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [emi, setEmi] = useState(0);

  const handlePrincipalChange = (e) => {
    setPrincipal(e.target.value);
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(e.target.value);
  };

  const handleTenureChange = (e) => {
    setTenure(e.target.value);
  };

  const handleCalculate = () => {
    const monthlyInterestRate = interestRate / 1200;
    const months = tenure * 12;
    const emiValue = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) / (Math.pow(1 + monthlyInterestRate, months) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className="calculator-container">
        <h2 className="text-center emi-heading">EMI Calculator</h2>
        <form>
          <div className="form-group">
            <label for="principal">Loan Amount</label>
            <input type="number" id="principal" value={principal} onChange={handlePrincipalChange} className="form-control input-number" />
          </div>
          <div className="form-group">
            <label for="interestRate">Interest Rate (%)</label>
            <input type="number" id="interestRate" value={interestRate} onChange={handleInterestRateChange} className="form-control input-number" />
          </div>
          <div className="form-group">
            <label for="tenure">Tenure (Years)</label>
            <input type="number" id="tenure" value={tenure} onChange={handleTenureChange} className="form-control input-number" />
          </div>
          <button type="button" onClick={handleCalculate} className="btn btn-primary cal-button">Calculate EMI</button>
          <div className="form-group">
            <label for="emi">EMI</label>
            <input type="text" id="emi" value={emi} readOnly className="form-control input-text" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EMICalculator;