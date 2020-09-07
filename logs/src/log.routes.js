const express = require('express');
const router = express.Router();
const logController = require('./log.controller')

// Find ALL Logs
router.get('/', logController.findAll);

module.exports = router;