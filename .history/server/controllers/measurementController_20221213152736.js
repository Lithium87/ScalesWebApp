const asyncHandler = require ('express-async-handler');
const {Op} = require ('sequelize');
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

exports.applyFilters = asyncHandler (async (req, res) => {
  let fromDate = new Date (req.body.fromDate).toISOString ().substring (0, 10);
  let toDate = new Date (req.body.toDate).toISOString ().substring (0, 10);
  let material = req.body.material;
  let operator = req.body.operator;

  let filters = {
    fromDate,
    toDate,
    material,
    operator,
  };

  console.log (filters);

  const filteredMeasurementsPerScale = await db.Measurement.findAll ({
    attributes: [
      'materialType',
      'operatorName',
      'weight',
      'density',
      'mixer',
      'byrkalo',
      'penetration',
      'createdAt',
    ],
    where: {
      [Op.and]: [
        {scaleId: req.params.id},
        {materialType: filters.material},
        {operatorName: filters.operator},
        sequelize.where (
          sequelize.fn ('DATE', sequelize.col ('createdAt')),
          '%Y-%m-%d',
          {
            [Op.gte]: filters.fromDate,
            [Op.lte]: filters.toDate,
          }
        ),
      ],
    },
  });

  console.log (filteredMeasurementsPerScale);
});
