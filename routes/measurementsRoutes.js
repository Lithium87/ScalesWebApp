const express = require('express');
const measurementsController = require('../controllers/measurementsController');

const router = express.Router();

router.route('/').get(measurementsController.getAllMeasurements);

router
  .route('/:scale_id')
  .get(measurementsController.getMeasurementsPerScale)
  .post(measurementsController.filterMeasurements);

module.exports = router;
