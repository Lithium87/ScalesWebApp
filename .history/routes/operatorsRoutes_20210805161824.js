const express = require('express');
const operatorsController = require('../controllers/operatorsController');

const router = express.Router();

router.route('/').get(operatorsController.getAllOperators);

module.exports = router;