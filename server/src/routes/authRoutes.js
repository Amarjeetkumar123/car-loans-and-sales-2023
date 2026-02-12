const express = require('express');
const { login, register, getMe, changePassword, refresh } = require('../controllers/authController');
const { protect, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/login', login);
router.post('/refresh', refresh);

// Protected routes
router.post('/register', protect, authorizeRoles('super_admin'), register); // Only super admins can create new admins
router.get('/me', protect, getMe);
router.patch('/password', protect, changePassword);

module.exports = router;
