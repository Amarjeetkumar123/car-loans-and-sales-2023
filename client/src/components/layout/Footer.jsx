import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../../constants/data';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Car Loans & Sales</h3>
            <p className="text-gray-400">
              Your trusted partner for car loans and sales. We help you get the best deals on car financing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/benefits" className="text-gray-400 hover:text-white transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link to="/eligibility" className="text-gray-400 hover:text-white transition-colors">
                  Eligibility
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-gray-400 hover:text-white transition-colors">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>New Car Loan</li>
              <li>Used Car Loan</li>
              <li>Auto Loan Top Up</li>
              <li>Refinance</li>
              <li>Balance Transfer</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="font-semibold">Phone:</span> {CONTACT_INFO.phone}
              </li>
              <li>
                <span className="font-semibold">Email:</span> {CONTACT_INFO.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Car Loans & Sales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
