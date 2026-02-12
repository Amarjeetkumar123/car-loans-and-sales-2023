const express = require('express');
const { protect, authorizeRoles } = require('../middleware/auth');
const { getAdmins, createAdmin } = require('../controllers/adminController');
const { getAuditLogs } = require('../controllers/auditLogController');
const { getEmailTemplates, updateEmailTemplate } = require('../controllers/emailTemplateController');
const { body, validationResult } = require('express-validator');

const router = express.Router();

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({
			success: false,
			message: 'Validation failed',
			errors: errors.array(),
		});
	}
	next();
};

router.get('/users', protect, authorizeRoles('admin', 'manager', 'super_admin'), getAdmins);
router.post(
	'/users',
	protect,
	authorizeRoles('super_admin'),
	[
		body('name').trim().notEmpty().withMessage('Name is required'),
		body('email').isEmail().withMessage('Valid email is required'),
		body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
		body('role')
			.optional()
			.isIn(['admin', 'manager', 'agent', 'super_admin'])
			.withMessage('Role must be admin, manager, agent, or super_admin'),
	],
	validate,
	createAdmin
);
router.get('/audit-logs', protect, authorizeRoles('admin', 'manager', 'super_admin'), getAuditLogs);
router.get('/email-templates', protect, authorizeRoles('admin', 'super_admin'), getEmailTemplates);
router.patch('/email-templates/:name', protect, authorizeRoles('admin', 'super_admin'), updateEmailTemplate);

module.exports = router;
