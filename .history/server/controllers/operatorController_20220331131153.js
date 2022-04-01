const asyncHandler = require ('express-async-handler');
const db = require ('../../models');

exports.getAllOperators = asyncHandler (async (req, res) => {
  const operators = await db.Operator.findAll ();
  console.log (operators[0].operatorName);

  if (operators) {
    res.json (operators);
  } else {
    res.status (404);
    throw new Error ('No operators!');
  }
});