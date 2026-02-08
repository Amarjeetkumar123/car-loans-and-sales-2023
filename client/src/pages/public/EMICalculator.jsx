import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const EMICalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [emi, setEmi] = useState('');

  const handleCalculate = () => {
    const monthlyInterestRate = interestRate / 1200;
    const months = tenure * 12;
    if (!principal || !interestRate || !tenure) {
      setEmi('');
      return;
    }
    const emiValue =
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) /
      (Math.pow(1 + monthlyInterestRate, months) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <div>
      <PageHeader title="EMI Calculator" subtitle="Calculate your monthly EMI" />

      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto">
          <Card>
            <h2 className="text-2xl font-bold text-center mb-6">EMI Calculator</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Amount</label>
                <input
                  type="number"
                  className="input-field"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Rate (%)</label>
                <input
                  type="number"
                  className="input-field"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tenure (Years)</label>
                <input
                  type="number"
                  className="input-field"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                />
              </div>
              <Button onClick={handleCalculate} className="w-full">
                Calculate EMI
              </Button>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">EMI</label>
                <input type="text" className="input-field" value={emi} readOnly />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default EMICalculator;
