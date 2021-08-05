const express = require('express');
const scaleController = require('../controllers/scaleController');

const router = express.Router();

router.route('/').get(scaleController.getAllScales);

module.exports = router;