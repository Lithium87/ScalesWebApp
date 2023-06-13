const express = require ('express');
const {
  getLeadPasteTolerances,
  getLeadPasteTolerancesById,
  updateLeadPasteTolerancesById,
  createLeadPasteTolerances,
} = require ('../controllers/leadPasteTolerancesController');

const router = express.Router ();

router
  .route ('/')
  .get (getLeadPasteTolerances)
  .post (createLeadPasteTolerances);

router
  .route ('/:id')
  .get (getLeadPasteTolerancesById)
  .put (updateLeadPasteTolerancesById);

module.exports = router;
