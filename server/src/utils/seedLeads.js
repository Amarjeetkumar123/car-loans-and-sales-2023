require('dotenv').config();
const connectDB = require('../config/database');
const Lead = require('../models/Lead');

const sampleLeads = [
  {
    firstName: 'Amit',
    lastName: 'Sharma',
    email: 'amit.sharma@example.com',
    phone: '9876543210',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560001',
    loanType: 'Used Car Loan',
    message: 'Looking for a used car loan for a hatchback.',
    status: 'New',
  },
  {
    firstName: 'Priya',
    lastName: 'Nair',
    email: 'priya.nair@example.com',
    phone: '9876543211',
    city: 'Kochi',
    state: 'Kerala',
    pincode: '682001',
    loanType: 'New Car Loan',
    message: 'Need best rate for a new sedan.',
    status: 'Contacted',
    nextFollowUpAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  },
  {
    firstName: 'Rahul',
    lastName: 'Mehta',
    email: 'rahul.mehta@example.com',
    phone: '9876543212',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    loanType: 'Balance Transfer',
    message: 'Want to transfer my existing loan.',
    status: 'Follow-up',
    nextFollowUpAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
  {
    firstName: 'Sneha',
    lastName: 'Patel',
    email: 'sneha.patel@example.com',
    phone: '9876543213',
    city: 'Ahmedabad',
    state: 'Gujarat',
    pincode: '380001',
    loanType: 'Refinance',
    message: 'Need refinance options for my current car loan.',
    status: 'Interested',
  },
  {
    firstName: 'Arjun',
    lastName: 'Singh',
    email: 'arjun.singh@example.com',
    phone: '9876543214',
    city: 'Delhi',
    state: 'Delhi',
    pincode: '110001',
    loanType: 'Auto Loan Top Up',
    message: 'Require top-up for car maintenance.',
    status: 'Not Interested',
  },
  {
    firstName: 'Neha',
    lastName: 'Gupta',
    email: 'neha.gupta@example.com',
    phone: '9876543215',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411001',
    loanType: 'Used Car Loan',
    message: 'Need financing for a used SUV.',
    status: 'Converted',
  },
  {
    firstName: 'Vikram',
    lastName: 'Reddy',
    email: 'vikram.reddy@example.com',
    phone: '9876543216',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500001',
    loanType: 'New Car Loan',
    message: 'Looking for low EMI options.',
    status: 'Rejected',
  },
  {
    firstName: 'Kavya',
    lastName: 'Iyer',
    email: 'kavya.iyer@example.com',
    phone: '9876543217',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600001',
    loanType: 'Used Car Loan',
    message: 'Need approval within 48 hours.',
    status: 'Contacted',
    nextFollowUpAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
  },
  {
    firstName: 'Manish',
    lastName: 'Verma',
    email: 'manish.verma@example.com',
    phone: '9876543218',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '302001',
    loanType: 'Refinance',
    message: 'Considering refinance to reduce EMI.',
    status: 'Follow-up',
    nextFollowUpAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  },
  {
    firstName: 'Pooja',
    lastName: 'Das',
    email: 'pooja.das@example.com',
    phone: '9876543219',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700001',
    loanType: 'New Car Loan',
    message: 'Looking for best interest rates.',
    status: 'New',
  },
];

const seedLeads = async () => {
  try {
    await connectDB();

    await Lead.insertMany(sampleLeads);

    console.log('✅ Demo leads inserted:', sampleLeads.length);
    process.exit(0);
  } catch (error) {
    console.error('❌ Failed to insert demo leads:', error.message);
    process.exit(1);
  }
};

seedLeads();
