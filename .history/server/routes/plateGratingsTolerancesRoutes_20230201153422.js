const express = require ('express');
const {
  getPlateGratingsTolerances,
  getPlateGratingsToleranceById,
} = require ('../controllers/plateGratingsTolerancesController');

const router = express.Router ();

router.route ('/').get (getPlateGratingsTolerances);
router.route ('/:id').get (getPlateGratingsToleranceById);

module.exports = router;
