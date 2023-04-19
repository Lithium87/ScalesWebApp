const express = require ('express');
const {
  getAllOperators,
  getOperatorById,
  updateOperatorById,
  createOperator,
} = require ('../controllers/operatorController');

const router = express.Router ();

router.route ('/').get (getAllOperators).post (createOperator);

router.route ('/:id').get (getOperatorById).put (updateOperatorById);

module.exports = router;
