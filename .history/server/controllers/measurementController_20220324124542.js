const asyncHandler = require ('express-async-handler');
const db = require ('../../models');

exports.getMeasurementsPerScale = asyncHandler (async (req, res) => {
  const measurementsPerScale = await db.Measurement.findAll ({
    where: {scaleId: req.params.id},
  });
});
