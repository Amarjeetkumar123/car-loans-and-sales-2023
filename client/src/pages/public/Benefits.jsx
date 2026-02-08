import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

const Benefits = () => {
  return (
    <div>
      <PageHeader title="Benefits For You" subtitle="Know about used car loan benefits" />

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center">WHAT IS A USED CAR LOAN?</h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            Opting for a used car loan is a smart, value-for-money purchase. We offer used car loans for a wide
            collection of cars ranging from hatchbacks & SUVs to premium sedans. We extend loans up to 95% loan on
            your car value and provide flexible EMI repayment options, and quick disbursal of loans which makes the
            best choice for financing your car.
          </p>
          <p className="mt-4 italic text-gray-600">
            <strong>Disclaimer:</strong> We Provide you Service to get Car Loans at the indicative interest rates as per
            respective banks pertain to loans availed for cars which are for personal use. For loans for cars which are
            for commercial use, interest rates may differ. Interest rates may differ from time to time at the discretion
            of respective banks. Terms and conditions apply.
          </p>

          <div className="text-center mt-8">
            <Link to="/apply">
              <Button className="rounded-full">Apply Now</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">KEY FEATURES</h2>
            <p className="text-gray-700">Loan Amount 1,00,000 – 50,00,000</p>
            <p className="text-gray-700 mt-6">Loan Tenure 12-60 months</p>
            <p className="text-gray-700">Interest rate starting at 15% for used cars</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="text-center">
              <h5 className="font-semibold">Flexible Tenure</h5>
              <p className="text-gray-600 text-sm">Easy ways to repay your loan over a period of 60 months.</p>
            </Card>
            <Card className="text-center">
              <h5 className="font-semibold">Quick Processing</h5>
              <p className="text-gray-600 text-sm">
                Online application process with minimal paperwork. We will take care of the rest.
              </p>
            </Card>
            <Card className="text-center">
              <h5 className="font-semibold">Flexi EMI Options</h5>
              <p className="text-gray-600 text-sm">Repay your loan according to your convenience.</p>
            </Card>
            <Card className="text-center">
              <h5 className="font-semibold">Competitive interest rates</h5>
              <p className="text-gray-600 text-sm">We suggest the best interest rates among lenders.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <Card>
              <h5 className="font-semibold">Online Application</h5>
              <p className="text-gray-600 text-sm">We just need your basic details.</p>
            </Card>
            <Card>
              <h5 className="font-semibold">Documentation and Verification</h5>
              <p className="text-gray-600 text-sm">We assist you with document submission.</p>
            </Card>
            <Card>
              <h5 className="font-semibold">Approval</h5>
              <p className="text-gray-600 text-sm">Your loan is sanctioned.</p>
            </Card>
            <Card>
              <h5 className="font-semibold">Drive Away</h5>
              <p className="text-gray-600 text-sm">Receive amount and take your car.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-8">6 Reasons to Choose Us for Taking a Used Car Loan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h5 className="font-semibold">Minimum paperwork</h5>
              <p className="text-gray-600 text-sm">We help you throughout documentation.</p>
            </Card>
            <Card>
              <h5 className="font-semibold">Repayment</h5>
              <p className="text-gray-600 text-sm">We remind you to repay on time.</p>
            </Card>
            <Card>
              <h5 className="font-semibold">Competitive interest rates</h5>
              <p className="text-gray-600 text-sm">We help select best rates.</p>
            </Card>
            <Card>
              <h5 className="font-semibold">High loan amount</h5>
              <p className="text-gray-600 text-sm">Get upto 95% of loan amount.</p>
            </Card>
            <Card>
              <h5 className="font-semibold">Minimum documents</h5>
              <p className="text-gray-600 text-sm">Minimal documentation for your request.</p>
            </Card>
            <Card>
              <h5 className="font-semibold">Instant online approval</h5>
              <p className="text-gray-600 text-sm">We process your loan on your required time.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
