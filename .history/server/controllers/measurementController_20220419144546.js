const asyncHandler = require ('express-async-handler');
const db = require ('../../models');

exports.getAllMeasurements = asyncHandler (async (req, res) => {
  const measurements = await db.Measurement.findAll ();

  if (measurements) {
    res.json (measurements);
  } else {
    res.status (404);
    throw new Error ('No measurements');
  }
});

exports.getMeasurementsPerScale = asyncHandler (async (req, res) => {
  const measurementsPerScale = await db.Measurement.findAll ({
    where: {scaleId: req.params.id},
  });
  console.log (req.params.id);
  console.log (measurementsPerScale[0].materialName);

  if (measurementsPerScale) {
    res.json (measurementsPerScale);
  } else {
    res.status (404);
    throw new Error ('This scales has no measurements!');
  }
});

// IMPLEMENT FILTERS HERE AND SPLIT THE createdAt TO GET ONLY THE DATE
// var date = new Date("2013-03-10T02:00:00Z");
// date.toISOString().substring(0, 10);
exports.applyFilters = asyncHandler (async (req, res) => {
  let reqDate1 = req.body.filters.fromDate;
  let date1 = new Date (reqDate1);
  let fromDate = date1.toISOString ().substring (0, 10);

  let reqDate2 = req.body.filters.toDate;
  let date2 = new Date (reqDate2);
  let toDate = date2.toISOString ().substring (0, 10);

  let material = req.body.filters.material;

  let operator = req.body.filters.operator;

  const data = {
    fromDate,
    toDate,
    material,
    operator,
  };

  console.log (data);
});
