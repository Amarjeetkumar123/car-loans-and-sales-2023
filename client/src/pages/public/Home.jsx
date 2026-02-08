import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Accordion from '../../components/common/Accordion';
import { Link } from 'react-router-dom';
import {
  HERO_IMAGE,
  LOAN_TYPES,
  LOAN_STEPS,
  LENDING_PARTNERS,
  TESTIMONIALS,
  COMPANY_METRICS,
  FAQS,
  CONTACT_INFO,
} from '../../constants/data';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-bold tracking-widest text-yellow-300">CAR LOANS</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Easy Funding to <br /> get the car you want
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/apply">
                <Button className="!bg-white !text-primary hover:!bg-gray-100">
                  Get Loan Now
                </Button>
              </Link>
              <Link to="/emi-calculator">
                <Button variant="secondary">EMI Calculator</Button>
              </Link>
            </div>
          </div>
          <div>
            <img src={HERO_IMAGE} alt="cars" className="w-full" />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Get a Loan in 3 Simple Steps</h2>
          <p className="text-gray-600 mt-2">Getting a loan on your car is Quick, Simple and Hassle Free</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {LOAN_STEPS.map((step, index) => (
              <Card key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Types of Car Loans We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOAN_TYPES.map((loanType, index) => (
              <Card key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-2">{loanType}</h3>
                <p className="text-gray-600">Get the best rates and flexible repayment options</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lending Partners */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Lending Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {LENDING_PARTNERS.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <img src={partner.image} alt={partner.name} className="h-16 object-contain" />
                <p className="mt-3 font-semibold text-gray-700">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Customers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Happy Customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item, index) => (
              <Card key={index} className="text-center">
                <img src={item.image} alt={item.name} className="w-32 mx-auto mb-4" />
                <p className="text-gray-600">{item.quote}</p>
                <h6 className="mt-3 font-semibold">— {item.name}</h6>
                <p className="text-gray-500 text-sm">{item.car}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-10 px-4 border-t border-b bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {COMPANY_METRICS.map((metric, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-bold text-gray-800">{metric.label}</h3>
              <p className="text-gray-600">{metric.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Give a missed call {CONTACT_INFO.phone}
          </h2>
          <h3 className="text-2xl font-semibold mb-4">FAQ's?</h3>
          <Accordion items={FAQS} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Apply now and drive your dream car home today!</p>
          <Link to="/apply">
            <Button className="!bg-white !text-primary hover:!bg-gray-100">Apply Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
