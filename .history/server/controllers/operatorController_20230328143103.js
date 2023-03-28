const asyncHandler = require ('express-async-handler');
const {Op, where} = require ('sequelize');
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

exports.getOperatorById = asyncHandler (async (req, res) => {
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

exports.updateOperatorById = asyncHandler (async (req, res) => {
  const updatedOperatorById = await db.Operator.update (
    {
      operatorName: req.body.operatorName,
      operatorCardNumber: req.body.operatorCardNumber,
      zvenoName: req.body.zvenoName,
    },
    {
      where: {id: req.params.id},
    }
  );

  if (updatedOperatorById) {
    res.json (updatedOperatorById);
  } else {
    res.status (404);
    throw new Error ('Ooops...Something went wrong!');
  }
});
