const asyncHandler = require ('express-async-handler');
const {Op} = require ('sequelize');
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

  if (measurementsPerScale) {
    res.json (measurementsPerScale);
  } else {
    res.status (404);
    throw new Error ('This scales has no measurements!');
  }
});

exports.applyFilters = asyncHandler (async (req, res) => {
  // let fromDate = new Date (req.body.fromDate).toISOString ().substring (0, 10);
  let fromDate = new Date (req.body.fromDate).toLocaleDateString ('fr-CA');
  let toDate = new Date (req.body.toDate).toISOString ().substring (0, 10);
  let material = req.body.material;
  let operator = req.body.operator;

  console.log (req.body);

  let filters = {
    fromDate,
    toDate,
    material,
    operator,
  };

  const filteredMeasurementsPerScale = await db.Measurement.findAll ({
    where: {
      scaleId: req.params.id,
      materialType: filters.material,
      operatorName: filters.operator,
      createdAt: {
        [Op.between]: [filters.fromDate, filters.toDate],
      },
    },
  });

  if (filteredMeasurementsPerScale) {
    res.json (filteredMeasurementsPerScale);
  } else {
    res.status (404);
    throw new Error ('This scale has no measurements!');
  }
});

// https://sequelize.org/docs/v6/core-concepts/raw-queries/
