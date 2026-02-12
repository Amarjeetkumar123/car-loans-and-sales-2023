const Admin = require('../models/Admin');
const { sendEmail } = require('../services/emailService');

// @desc    Get admins (active by default)
// @route   GET /api/admin/users
// @access  Private
const getAdmins = async (req, res) => {
  try {
    const includeInactive = String(req.query.includeInactive || '').toLowerCase() === 'true';
    const canViewInactive = req.admin?.role === 'super_admin' && includeInactive;
    const filter = canViewInactive ? {} : { isActive: true };

    const admins = await Admin.find(filter).select('_id name email role isActive createdAt');

    res.status(200).json({
      success: true,
      admins,
    });
  } catch (error) {
    console.error('Get admins error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch admins',
    });
  }
};

// @desc    Create admin user
// @route   POST /api/admin/users
// @access  Private (super_admin)
const createAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: 'Admin with this email already exists',
      });
    }

    const admin = await Admin.create({
      name,
      email,
      password,
      role: role || 'admin',
    });

    await sendEmail({
      to: admin.email,
      template: 'adminWelcome',
      data: {
        name: admin.name,
        email: admin.email,
        role: admin.role,
        tempPassword: password,
        loginUrl: process.env.CLIENT_URL
          ? `${process.env.CLIENT_URL.replace(/\/$/, '')}/admin/login`
          : '',
      },
    });

    res.status(201).json({
      success: true,
      message: 'Admin created successfully',
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        isActive: admin.isActive,
        createdAt: admin.createdAt,
      },
    });
  } catch (error) {
    console.error('Create admin error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create admin',
    });
  }
};

module.exports = {
  getAdmins,
  createAdmin,
};
