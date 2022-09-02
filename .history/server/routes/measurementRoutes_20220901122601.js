const express = require ('express');
const {
  getMeasurementsPerScale,
  getAllMeasurements,
  applyFilters,
} = require ('../controllers/measurementController');

const router = express.Router ();

router.route ('/').get (getAllMeasurements);

router.route ('/:id').get (getMeasurementsPerScale).get (applyFilters);

module.exports = router;
