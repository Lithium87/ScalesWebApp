const asyncHandler = require ('express-async-handler');
const db = require ('../../models');

exports.getAllOperators = asyncHandler (async (req, res) => {
  const operators = await db.Operator.findAll ({
    attributes: [zvenoId, operatorName],
  });

  if (operators) {
    res.json (operators);
  } else {
    res.status (404);
    throw new Error ('No Operators');
  }
});
