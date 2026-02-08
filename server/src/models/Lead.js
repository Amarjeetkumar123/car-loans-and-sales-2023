const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
    },
    state: {
      type: String,
      required: [true, 'State is required'],
      trim: true,
    },
    pincode: {
      type: String,
      required: [true, 'Pincode is required'],
      trim: true,
    },
    loanType: {
      type: String,
      required: [true, 'Loan type is required'],
      enum: ['New Car Loan', 'Used Car Loan', 'Auto Loan Top Up', 'Refinance', 'Balance Transfer'],
    },
    message: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: [
        'New',
        'Contacted',
        'Follow-up',
        'Interested',
        'Not Interested',
        'Converted',
        'Rejected',
      ],
      default: 'New',
    },
    lastContactedAt: {
      type: Date,
      default: null,
    },
    nextFollowUpAt: {
      type: Date,
      default: null,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      default: null,
    },
    notes: [
      {
        text: String,
        addedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Admin',
        },
        addedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Index for faster searches
leadSchema.index({ email: 1, phone: 1, status: 1, createdAt: -1 });

module.exports = mongoose.model('Lead', leadSchema);
