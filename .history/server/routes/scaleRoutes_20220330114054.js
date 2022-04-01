const express = require ('express');
const {getAllScales, getScaleById} = require ('../controllers/scaleController');

const router = express.Router ();

router.route ('/').get (getAllScales);
router.route ('/:id').get (getScaleById);

module.exports = router;
