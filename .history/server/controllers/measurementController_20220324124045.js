const asyncHandler = require ('express-async-handler');
const db = require ('../../models');

exports.getMeasurementsPerScale = asyncHandler (async (req, res) => {
  const scaleId = req.params.id;
  console.log (scaleId);
});
