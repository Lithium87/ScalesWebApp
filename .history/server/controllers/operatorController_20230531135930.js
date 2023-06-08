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
    attributes: [
      'id',
      'operatorName',
      'operatorCardNumber',
      'zvenoId',
      'zvenoName',
    ],
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
  const zvenoId = await db.Zveno.findOne ({
    attributes: [zvenoId],
    where: {
      zvenoName: req.body.zvenoName,
    },
  });

  const updatedOperatorById = await db.Operator.update (
    {
      operatorName: req.body.operatorName,
      operatorCardNumber: req.body.operatorCardNumber,
      zvenoId,
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

exports.createOperator = asyncHandler (async (req, res) => {
  const newOperator = await db.Operator.create ({
    operatorName: req.body.operatorName,
    operatorCardNumber: req.body.operatorCardNumber,
    zvenoId: req.body.zvenoId,
    zvenoName: req.body.zvenoName,
  });

  if (newOperator) {
    res.json (newOperator);
  } else {
    res.status (404);
    throw new Error ('Ooops...Something went wrong!');
  }
});
