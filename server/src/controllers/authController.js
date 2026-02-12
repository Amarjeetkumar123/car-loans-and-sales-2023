const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Admin = require('../models/Admin');

const signAccessToken = (adminId) =>
  jwt.sign({ id: adminId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

const signRefreshToken = (adminId) =>
  jwt.sign({ id: adminId }, process.env.REFRESH_TOKEN_SECRET || process.env.JWT_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRE || '30d',
  });

const hashToken = (token) => crypto.createHash('sha256').update(token).digest('hex');

const parseExpiresToDate = (value) => {
  if (!value) return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  if (typeof value === 'number') return new Date(Date.now() + value * 1000);
  const str = String(value).trim();
  const match = str.match(/^(\d+)([smhd])$/i);
  if (!match) return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const amount = Number(match[1]);
  const unit = match[2].toLowerCase();
  const multipliers = { s: 1000, m: 60000, h: 3600000, d: 86400000 };
  return new Date(Date.now() + amount * (multipliers[unit] || 86400000));
};

// @desc    Login admin
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password',
      });
    }

    // Check if admin exists (include password for comparison)
    const admin = await Admin.findOne({ email }).select('+password');

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    // Check if admin is active
    if (!admin.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Account is deactivated',
      });
    }

    // Check password
    const isPasswordMatch = await admin.comparePassword(password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    // Create tokens
    const token = signAccessToken(admin._id);
    const refreshToken = signRefreshToken(admin._id);

    admin.refreshTokenHash = hashToken(refreshToken);
    admin.refreshTokenExpiresAt = parseExpiresToDate(process.env.REFRESH_TOKEN_EXPIRE || '30d');
    await admin.save();

    res.status(200).json({
      success: true,
      token,
      refreshToken,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login',
    });
  }
};

// @desc    Register admin (protected - only existing admins can create new admins)
// @route   POST /api/auth/register
// @access  Private
const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
      });
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: 'Admin with this email already exists',
      });
    }

    // Create admin
    const admin = await Admin.create({
      name,
      email,
      password,
      role: role || 'admin',
    });

    res.status(201).json({
      success: true,
      message: 'Admin created successfully',
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during registration',
    });
  }
};

// @desc    Get current logged in admin
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id);

    res.status(200).json({
      success: true,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error('Get me error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

// @desc    Refresh access token
// @route   POST /api/auth/refresh
// @access  Public
const refresh = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: 'Refresh token is required',
      });
    }

    let decoded;
    try {
      decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET || process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: 'Invalid refresh token',
      });
    }

    const admin = await Admin.findById(decoded.id).select('+refreshTokenHash');
    if (!admin || !admin.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Admin not found or inactive',
      });
    }

    if (!admin.refreshTokenHash || admin.refreshTokenHash !== hashToken(refreshToken)) {
      return res.status(401).json({
        success: false,
        message: 'Refresh token mismatch',
      });
    }

    if (admin.refreshTokenExpiresAt && admin.refreshTokenExpiresAt < new Date()) {
      return res.status(401).json({
        success: false,
        message: 'Refresh token expired',
      });
    }

    const newAccessToken = signAccessToken(admin._id);
    const newRefreshToken = signRefreshToken(admin._id);
    admin.refreshTokenHash = hashToken(newRefreshToken);
    admin.refreshTokenExpiresAt = parseExpiresToDate(process.env.REFRESH_TOKEN_EXPIRE || '30d');
    await admin.save();

    res.status(200).json({
      success: true,
      token: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    console.error('Refresh token error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to refresh token',
    });
  }
};

// @desc    Change password for logged-in admin
// @route   PATCH /api/auth/password
// @access  Private
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Current and new password are required',
      });
    }

    if (String(newPassword).length < 6) {
      return res.status(400).json({
        success: false,
        message: 'New password must be at least 6 characters',
      });
    }

    const admin = await Admin.findById(req.admin.id).select('+password');
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: 'Admin not found',
      });
    }

    const isPasswordMatch = await admin.comparePassword(currentPassword);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: 'Current password is incorrect',
      });
    }

    admin.password = newPassword;
    await admin.save();

    res.status(200).json({
      success: true,
      message: 'Password updated successfully',
    });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update password',
    });
  }
};

module.exports = {
  login,
  register,
  getMe,
  changePassword,
  refresh,
};
