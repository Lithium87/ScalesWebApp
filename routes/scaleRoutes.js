const express = require('express');
const scaleController = require('../controllers/scaleController');

const router = express.Router();

router.route('/').get(scaleController.getAllScales);

router.route('/:scale_id').get(scaleController.getScale);

module.exports = router;