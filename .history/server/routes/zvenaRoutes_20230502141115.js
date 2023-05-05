const express = require ('express');
const {getZvena} = require ('../controllers/zvenaController');

const router = express.Router ();

router.route ('/').get (getZvena);

module.exports = router;
