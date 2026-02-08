const express = require('express');
const { protect } = require('../middleware/auth');
const { getAdmins } = require('../controllers/adminController');

const router = express.Router();

router.get('/users', protect, getAdmins);

module.exports = router;
