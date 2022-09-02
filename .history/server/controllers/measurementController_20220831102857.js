const asyncHandler = require ('express-async-handler');
const {Op, QueryTypes, Sequelize} = require ('sequelize');
const db = require ('../../models');

// let sequelize = new Sequelize ('./server/WebScales.sqlite');

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
  const splitDate = inputDate.split ('/').reverse ();

  if (splitDate.count === 0) {
    return null;
  }

  let temp = splitDate[2];
  splitDate[2] = splitDate[1];
  splitDate[1] = temp;
  splitDate = splitDate.join ('-');

  return splitDate;

  // const year = splitDate[2];
  // const month = splitDate[0];
  // const day = splitDate[1];

  // return year + '-' + month + '-' + day;
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

  // var dat = "03/07/2016"
  // var yourdate = dat.split("/").reverse();
  // var tmp = yourdate[2];
  // yourdate[2] = yourdate[1];
  // yourdate[1] = tmp;
  // yourdate = yourdate.join("-");

  let filters = {
    fromDate,
    toDate,
    material,
    operator,
  };

  console.log (filters);

  const filteredMeasurementsPerScale = await db.measurement.sequelize.query (
    'SELECT materialType, operatorName, weight, time(createdAt) as time, date(createdAt) as date, density, mixer, byrkalo, penetration FROM Measurements WHERE scaleId = :scaleId AND materialType = :materialType AND operatorName = :operatorName AND date BETWEEN(:date)',
    {
      replacements: {
        scaleId: req.params.id,
        materialType: filters.material,
        operatorName: filters.operator,
        date: [filters.fromDate, filters.toDate],
      },
      type: QueryTypes.SELECT,
    }
  );

  if (filteredMeasurementsPerScale) {
    res.json (filteredMeasurementsPerScale);
  } else {
    res.status (404);
    throw new Error ('This scale has no measurements!');
  }

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

  // if (filteredMeasurementsPerScale) {
  //   res.json (filteredMeasurementsPerScale);
  // } else {
  //   res.status (404);
  //   throw new Error ('This scale has no measurements!');
  // }
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
