const asyncHandler = require ('express-async-handler');
const {Op, QueryTypes} = require ('sequelize');
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
  let fromDate = new Date (req.body.fromDate).toISOString ().substring (0, 10);
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

  const query =
    'SELECT id, materialType, operatorName, time(createdAt) as time, date(createdAt) as date, weight, density, mixer, byrkalo FROM Measurements WHERE scaleId = :scaleId, materialType = :materialType, operatorName = :operatorName, date BETWEEN (:date)';

  const filteredMeasurementsPerScale = await query (query, {
    replacements: {
      scaleId: req.params.id,
      materialType: filters.material,
      operatorName: filters.operator,
      date: [filters.fromDate, filters.toDate],
    },
    type: QueryTypes.SELECT,
  });

  // SELECT id, scaleId, materialType, operatorName,
  // time(createdAt) as time, date(createdAt) as date,
  // weight, density, mixer, byrkalo, penetration
  // FROM Measurements
  // WHERE date BETWEEN '2022-05-23' AND '2022-05-23' AND scaleId = 9 AND density = 10.52

  // const filteredMeasurementsPerScale = await db.Measurement.findAll ({
  //   where: {
  //     scaleId: req.params.id,
  //     materialType: filters.material,
  //     operatorName: filters.operator,
  //     createdAt: {
  //       [Op.between]: [filters.fromDate, filters.toDate],
  //     },
  //   },
  // });

  if (filteredMeasurementsPerScale) {
    res.json (filteredMeasurementsPerScale);
  } else {
    res.status (404);
    throw new Error ('This scale has no measurements!');
  }
});

// https://sequelize.org/docs/v6/core-concepts/raw-queries/
