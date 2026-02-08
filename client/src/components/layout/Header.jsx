import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../../constants/data';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Car Loans & Sales
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/benefits" className="text-gray-700 hover:text-primary transition-colors">
              Benefits
            </Link>
            <Link to="/eligibility" className="text-gray-700 hover:text-primary transition-colors">
              Eligibility
            </Link>
            <Link to="/interest-rates" className="text-gray-700 hover:text-primary transition-colors">
              Interest Rates
            </Link>
            <Link to="/emi-calculator" className="text-gray-700 hover:text-primary transition-colors">
              EMI Calculator
            </Link>
            <Link to="/apply" className="btn-primary !py-2 !px-4 text-sm">
              Apply Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
