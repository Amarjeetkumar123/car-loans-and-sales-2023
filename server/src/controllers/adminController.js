const Admin = require('../models/Admin');

// @desc    Get all admins (for assignment)
// @route   GET /api/admin/users
// @access  Private
const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({ isActive: true }).select('_id name email role');

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

module.exports = {
  getAdmins,
};
