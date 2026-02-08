import carHero from '../assets/images/cars.png';
import partner1 from '../assets/images/bankImages/CLS-LendingPartners-08.jpg';
import partner2 from '../assets/images/bankImages/CLS-LendingPartners-09.jpg';
import partner3 from '../assets/images/bankImages/CLS-LendingPartners-10.jpg';
import partner4 from '../assets/images/bankImages/CLS-LendingPartners-11.jpg';
import partner5 from '../assets/images/bankImages/CLS-LendingPartners-14.jpg';
import partner6 from '../assets/images/bankImages/CLS-LendingPartners-15.jpg';
import partner7 from '../assets/images/bankImages/CLS-LendingPartners-16.jpg';
import customer1 from '../assets/images/LVB-Web-09.png';
import customer2 from '../assets/images/LVB-Web-08.png';
import customer3 from '../assets/images/LVB-Web-07.png';

export const LOAN_TYPES = [
  'New Car Loan',
  'Used Car Loan',
  'Auto Loan Top Up',
  'Refinance',
  'Balance Transfer',
];

export const LEAD_STATUSES = [
  { value: 'New', label: 'New', color: 'blue' },
  { value: 'Contacted', label: 'Contacted', color: 'yellow' },
  { value: 'Follow-up', label: 'Follow-up', color: 'orange' },
  { value: 'Interested', label: 'Interested', color: 'green' },
  { value: 'Not Interested', label: 'Not Interested', color: 'red' },
  { value: 'Converted', label: 'Converted', color: 'emerald' },
  { value: 'Rejected', label: 'Rejected', color: 'slate' },
];

export const INDIAN_STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
];

export const CONTACT_INFO = {
  phone: '+91 9686-870-536',
  email: 'info@carloansandsales.com',
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/carloansandsales',
  instagram: 'https://instagram.com/carloansandsales',
};

export const HERO_IMAGE = carHero;

export const LOAN_STEPS = [
  {
    title: 'Share car details',
    description: 'Fill a simple form about your details',
  },
  {
    title: 'Check quotes and eligibility',
    description: 'Get instant car loan quotes',
  },
  {
    title: 'Leave the rest to us',
    description: 'Our loan consultant assist you',
  },
];

export const LENDING_PARTNERS = [
  { name: 'Bajaj Finserv', image: partner1 },
  { name: 'Hero FinCorp', image: partner2 },
  { name: 'Yes Bank', image: partner3 },
  { name: 'HDFC Bank', image: partner4 },
  { name: 'AXIS Bank', image: partner5 },
  { name: 'Kotak Mahindra Bank', image: partner6 },
  { name: 'TATA Capital', image: partner7 },
];

export const TESTIMONIALS = [
  {
    name: 'Vijaya Kumar KK',
    car: 'Swift ZXI',
    image: customer1,
    quote:
      'Good people, good interest. Helped me to buy a Swift ZXI car. The processing time was very fast, there were no extra charges.',
  },
  {
    name: 'Vijaya Kumar KK',
    car: 'Swift ZXI',
    image: customer2,
    quote:
      'Good people, good interest. Helped me to buy a Swift ZXI car. The processing time was very fast, there were no extra charges.',
  },
  {
    name: 'Vijaya Kumar KK',
    car: 'Swift ZXI',
    image: customer3,
    quote:
      'Good people, good interest. Helped me to buy a Swift ZXI car. The processing time was very fast, there were no extra charges.',
  },
];

export const COMPANY_METRICS = [
  { label: '10 Years', value: 'Of Excellence in Loans' },
  { label: '15+ Crore', value: 'Auto Loan Disbursed' },
  { label: 'Offers', value: 'Stay updated pay less' },
  { label: 'Compare', value: 'Decode the right car' },
];

export const FAQS = [
  {
    question: 'What are the different types of loans I can avail?',
    answer:
      'We can help you avail loan to purchase a used car or new car. We also help you to get a loan against your existing car. Loan against your car helps you get cash in your hand to fulfill any financial need.',
  },
  {
    question: 'What are the benefits of applying for loan through CLS?',
    answer:
      'GetFin Tech is the trusted partner of all leading financiers of India. We provide you with the best auto loan services that are quick and hassle-free. With over 10 lending partners, you can compare and choose from different offers from our financier partners. We also provide with door-step assistance to give you a great experience.',
  },
  {
    question: 'How much loan can I get?',
    answer:
      'The maximum amount of loan you can get is different for different banks. GetFin can help you avail 95% loan on your used car and new car purchase. With a top-up loan, you can get up to 100% loan on your car’s current market value.',
  },
  {
    question: 'Do I need to give collateral to get a loan?',
    answer:
      'No, you don’t need to give collateral. But you will have to hypothecate the car in the banks name and an endorsement made in the Registration Certificate (RC) book of the vehicle.',
  },
  {
    question: 'How long does it take to process the loan?',
    answer:
      'If all documents required are received in order, your process moves smoothly. You need to submit some documents like salary slips, tax returns, proof of residence, bank statements, etc. The processing time takes between 2 to 7 days.',
  },
];
