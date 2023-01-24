const express = require ('express');
const {
  getPlateGratingsTolerances,
} = require ('../controllers/tolerancesController');

const router = express.Router ();

router.route ('/plate_gratings_tolerances').get (getPlateGratingsTolerances);

module.exports = router;
