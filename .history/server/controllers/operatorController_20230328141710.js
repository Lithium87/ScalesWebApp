const asyncHandler = require ('express-async-handler');
const {Op} = require ('sequelize');
const db = require ('../../models');

exports.getAllOperators = asyncHandler (async (req, res) => {
  const operators = await db.Operator.findAll ();

  if (operators) {
    res.json (operators);
  } else {
    res.status (404);
    throw new Error ('No operators!');
  }
});

exports.getOperatorsById = asyncHandler (async (req, res) => {
  const operatorsById = await db.Operator.findOne ({
    attributes: ['id', 'operatorName', 'operatorCardNumber', 'zvenoName'],
    where: {
      id: req.params.id,
    },
  });

  if (operatorsById) {
    res.json (operatorsById);
  } else {
    res.status (404);
    throw new Error ('Ooops...Something went wrong!');
  }
});
