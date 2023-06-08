const express = require ('express');
const {
  getPlateGratingsTolerances,
  getPlateGratingsToleranceById,
  updatePlateGratingsTolerancesById,
  createPlateGratingsTolerances,
} = require ('../controllers/plateGratingsTolerancesController');

const router = express.Router ();

router
  .route ('/')
  .get (getPlateGratingsTolerances)
  .post (createPlateGratingsTolerances);
router
  .route ('/:id')
  .get (getPlateGratingsToleranceById)
  .put (updatePlateGratingsTolerancesById);

module.exports = router;
