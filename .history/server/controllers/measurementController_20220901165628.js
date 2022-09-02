const asyncHandler = require ('express-async-handler');
const {QueryTypes, Op, where, fn, col, literal} = require ('sequelize');
const {sequelize} = require ('../../models');
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

  //   let sql = `SELECT materialType, scaleId, opeartorName,
  //     date(createdAt) as data, time(createdAt) as vreme,
  //     weight, density, mixer, byrkalo, penetration
  //     FROM Measurements
  //     WHERE scaleId = ?, materialType = ?, operatorName = ?,
  //     data BETWEEN ? AND ?`;
  //     let params = [req.params.id, filters.material, filters.operator, filters.fromDate, filters.toDate];
  //     db.all(sql, params, (err, rows) => {
  //         if(err) return res.status(400).json({error: err.message});
  //         res.json({
  //             message: "success",
  //             data: rows
  //         })
  //     })
  // })

  const filteredMeasurementsPerScale = await sequelize.query (
    'SELECT `materialType`, `operatorName`, `weight`, `density`, `mixer`, `byrkalo`, `penetration`, DATE(`createdAt`) AS `data` FROM `Measurements` AS `Measurement` WHERE `Measurement`.`scaleId` = ? AND `Measurement`.`materialType` = ? AND `Measurement`.`operatorName` = ? AND (`Measurement`.`data` >= ? AND `Measurement`.`data` <= ? ',
    {
      replacements: [
        req.params.id,
        filters.material,
        filters.operator,
        filters.fromDate,
        filters.toDate,
      ],
      type: QueryTypes.SELECT,
      model: db.Measurement,
      mapToModel: true,
      raw: true,
    }
  );

  // const filteredMeasurementsPerScale = await db.Measurement.findAll ({
  //   attributes: [
  //     'materialType',
  //     'operatorName',
  //     'weight',
  //     'density',
  //     'mixer',
  //     'byrkalo',
  //     'penetration',
  //     [fn ('DATE', col ('createdAt')), 'data'],
  //   ],
  //   where: {
  //     scaleId: req.params.id,
  //     materialType: filters.material,
  //     operatorName: filters.operator,
  //     data: {
  //       [Op.gte]: filters.fromDate,
  //       [Op.lte]: filters.toDate,
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

// const { QueryTypes } = require('sequelize');

// await sequelize.query(
//   'SELECT * FROM projects WHERE status IN(:status)',
//   {
//     replacements: { status: ['active', 'inactive'] },
//     type: QueryTypes.SELECT
//   }
// );
