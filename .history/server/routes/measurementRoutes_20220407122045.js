const express = require ('express');
const {
  getMeasurementsPerScale,
  getAllMeasurements,
} = require ('../controllers/measurementController');

const router = express.Router ();

router.route ('/').get (getAllMeasurements);

router.route ('/:id').get (getMeasurementsPerScale);

module.exports = router;
