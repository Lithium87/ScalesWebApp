const express = require ('express');
const {
  getAllOperators,
  getOperatorById,
} = require ('../controllers/operatorController');

const router = express.Router ();

router.route ('/').get (getAllOperators);

router.route ('/:id').get (getOperatorById);

module.exports = router;
