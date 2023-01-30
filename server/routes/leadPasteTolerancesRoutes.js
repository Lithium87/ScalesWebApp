const express = require ('express');
const {
  getLeadPasteTolerances,
} = require ('../controllers/leadPasteTolerancesController');

const router = express.Router ();

router.route ('/').get (getLeadPasteTolerances);

module.exports = router;
