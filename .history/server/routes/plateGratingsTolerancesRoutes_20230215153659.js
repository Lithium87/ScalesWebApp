const express = require ('express');
const {
  getPlateGratingsTolerances,
  getPlateGratingsToleranceById,
  updatePlateGratingsTolerancesById,
} = require ('../controllers/plateGratingsTolerancesController');

const router = express.Router ();

router.route ('/').get (getPlateGratingsTolerances);
router
  .route ('/:id')
  .get (getPlateGratingsToleranceById)
  .post (updatePlateGratingsTolerancesById);

module.exports = router;
