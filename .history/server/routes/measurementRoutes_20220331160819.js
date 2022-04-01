const express = require ('express');
const {
  getMeasurementsPerScale,
} = require ('../controllers/measurementController');

const router = express.Router ();

router.route ('/:id').get (getMeasurementsPerScale);

module.exports = router;
