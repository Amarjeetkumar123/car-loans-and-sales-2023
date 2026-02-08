const express = require('express');
const { login, register, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/login', login);

// Protected routes
router.post('/register', protect, register); // Only logged-in admins can create new admins
router.get('/me', protect, getMe);

module.exports = router;
