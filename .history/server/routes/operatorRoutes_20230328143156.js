const express = require ('express');
const {
  getAllOperators,
  getOperatorById,
  updateOperatorById,
} = require ('../controllers/operatorController');

const router = express.Router ();

router.route ('/').get (getAllOperators);

router.route ('/:id').get (getOperatorById).put (updateOperatorById);

module.exports = router;
