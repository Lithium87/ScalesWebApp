const asyncHandler = require ('express-async-handler');
const {Op, fn, col} = require ('sequelize');
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

const changeDateFormat = inputDate => {
  let d = new Date (inputDate),
    month = '' + (d.getMonth () + 1),
    day = '' + (d.getDate () + 1),
    year = d.getFullYear ();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join ('-');
};

exports.applyFilters = asyncHandler (async (req, res) => {
  let fromISODate = new Date (req.body.fromDate)
    .toISOString ()
    .substring (0, 10);
  let fromDate = changeDateFormat (fromISODate);
  let toISODate = new Date (req.body.toDate).toISOString ().substring (0, 10);
  let toDate = changeDateFormat (toISODate);
  let material = req.body.material;
  let operator = req.body.operator;

  console.log (req.body);

  let filters = {
    fromDate,
    toDate,
    material,
    operator,
  };

  console.log (filters);

  // const filteredMeasurementsPerScale = await db.Measurement.findAll ({
  //   attributes: [
  //     'materialType',
  //     'operatorName',
  //     'weight',
  //     'density',
  //     'mixer',
  //     'byrkalo',
  //     'penetration',
  //     [fn ('TIME', col ('createdAt')), 'vreme'],
  //     [fn ('DATE', col ('createdAt')), 'data'],
  //   ],
  //   where: {
  //     scaleId: req.params.id,
  //     materialType: filters.material,
  //     operatorName: filters.operator,
  //   },
  // });

  // const filteredMeasurementsPerScale = await db.sequelize.query (
  //   'SELECT scaleId, materialType, operatorName, weight, time(createdAt) as time, date(createdAt) as date, density, mixer, byrkalo, penetration FROM Measurements WHERE "Measurements"."scaleId" = :scaleId AND "Measurements"."materialType" = :materialType AND "Measurements"."operatorName" = :operatorName AND "Measurements"."date" BETWEEN(:date)',
  //   {
  //     replacements: {
  //       scaleId: req.params.id,
  //       materialType: filters.material,
  //       operatorName: filters.operator,
  //       date: [filters.fromDate, filters.toDate],
  //     },
  //     type: db.sequelize.QueryTypes.SELECT,
  //     model: db.measurement,
  //     mapToModel: true,
  //   }
  // );

  // if (filteredMeasurementsPerScale) {
  //   res.json (filteredMeasurementsPerScale);
  // } else {
  //   res.status (404);
  //   throw new Error ('This scale has no measurements!');
  // }

  const filteredMeasurementsPerScale = await db.Measurement.findAll ({
    attributes: [
      'materialType',
      'operatorName',
      'weight',
      'density',
      'mixer',
      'byrkalo',
      'penetration',
      [fn ('TIME', col ('createdAt')), 'created_at_time'],
      [fn ('DATE', col ('createdAt')), 'created_at_date'],
    ],
    where: {
      scaleId: req.params.id,
      materialType: filters.material,
      operatorName: filters.operator,
      created_at_date: {
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

// const { QueryTypes } = require('sequelize');

// await sequelize.query(
//   'SELECT * FROM projects WHERE status IN(:status)',
//   {
//     replacements: { status: ['active', 'inactive'] },
//     type: QueryTypes.SELECT
//   }
// );
