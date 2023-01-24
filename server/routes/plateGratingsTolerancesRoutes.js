const express = require ('express');
const {
  getPlateGratingsTolerances,
} = require ('../controllers/plateGratingsTolerancesController');

const router = express.Router ();

router.route ('/').get (getPlateGratingsTolerances);

module.exports = router;
