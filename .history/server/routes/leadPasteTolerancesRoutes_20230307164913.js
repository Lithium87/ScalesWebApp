const express = require ('express');
const {
  getLeadPasteTolerances,
  getLeadPasteTolerancesById,
  updateLeadPasteTolerancesById,
} = require ('../controllers/leadPasteTolerancesController');

const router = express.Router ();

router.route ('/').get (getLeadPasteTolerances);

router
  .route ('/:id')
  .get (getLeadPasteTolerancesById)
  .put (updateLeadPasteTolerancesById);

module.exports = router;
