const asyncHandler = require ('express-async-handler');
const db = require ('../../models');

exports.getMeasurementsPerScale = asyncHandler (async (req, res) => {
  const scaleId = req.params;
  console.log (scaleId);
});
