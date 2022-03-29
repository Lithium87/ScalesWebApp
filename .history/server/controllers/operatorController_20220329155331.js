const asyncHandler = require ('express-async-handler');
const db = require ('../../models');

exports.getAllScales = asyncHandler (async (req, res) => {
  const operators = await db.Operator.findAll ();

  if (operators) {
    res.json (operators);
  } else {
    res.status (404);
    throw new Error ('No operators!');
  }
});
