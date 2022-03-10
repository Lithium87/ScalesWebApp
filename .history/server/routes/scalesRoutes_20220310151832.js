const express = require ('express');
const {getAllScales} = require ('../controllers/scalesController');

const router = express.Router ();

router.route ('/').get (getAllScales);

module.exports = router;
