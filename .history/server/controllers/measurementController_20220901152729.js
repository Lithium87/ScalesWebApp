const asyncHandler = require ('express-async-handler');
const {QueryTypes, Op, where, fn, col, literal} = require ('sequelize');
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

  console.log (filters);

  const filteredMeasurementsPerScale = await db.Measurement.findAll ({
    attributes: {
      include: [
        literal (`(
          SELECT materialType, operatorName, date(createdAt) as data, time(createdAt) as vreme, weight, density, mixer, byrkalo, penetration
          WHERE scaleId = ${id} AND materialType = ${material} AND operatorName = ${operator} AND data >= ${fromDate} AND data <= ${toDate}
        )`),
        req.params.id,
        filters.material,
        filters.operator,
        filters.fromDate,
        filters.toDate,
      ],
    },
  });

  // const filteredMeasurementsPerScale = await db.Measurement.findAll ({
  //   attributes: [
  //     'materialType',
  //     'operatorName',
  //     'weight',
  //     'density',
  //     'mixer',
  //     'byrkalo',
  //     'penetration',
  //     [fn ('DATE', '%Y-%m-%d', col ('createdAt')), 'data'],
  //   ],
  //   where: {
  //     scaleId: req.params.id,
  //     materialType: filters.material,
  //     operatorName: filters.operator,
  //     // data: {
  //     //   [Op.gte]: filters.fromDate,
  //     //   [Op.lte]: filters.toDate,
  //     // },
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

// const { QueryTypes } = require('sequelize');

// await sequelize.query(
//   'SELECT * FROM projects WHERE status IN(:status)',
//   {
//     replacements: { status: ['active', 'inactive'] },
//     type: QueryTypes.SELECT
//   }
// );
