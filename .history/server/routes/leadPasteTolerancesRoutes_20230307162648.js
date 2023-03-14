const express = require ('express');
const {
  getLeadPasteTolerances,
  getLeadPasteTolerancesById,
} = require ('../controllers/leadPasteTolerancesController');

const router = express.Router ();

router.route ('/').get (getLeadPasteTolerances);

router.route ('/:id').get (getLeadPasteTolerancesById);

module.exports = router;
