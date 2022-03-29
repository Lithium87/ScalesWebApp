const express = require ('express');
const {getAllOperators} = require ('../controllers/operatorController');

const router = express.Router ();

router.route ('/').get (getAllOperators);

module.exports = router;
