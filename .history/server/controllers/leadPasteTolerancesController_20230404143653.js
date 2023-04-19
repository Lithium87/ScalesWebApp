const asyncHandler = require ('express-async-handler');
const {Op} = require ('sequelize');
const {QueryTypes} = require ('sequelize');
const {sequelize} = require ('../../models');
const db = require ('../../models');

exports.getLeadPasteTolerances = asyncHandler (async (req, res) => {
  const leadPasteTolerances = await sequelize.query (
    'SELECT * FROM DopuskiOlovnaPasta',
    {type: QueryTypes.SELECT}
  );

  if (leadPasteTolerances) {
    res.json (leadPasteTolerances);
  } else {
    res.status (404);
    throw new Error ('Ooops...Something went wrong!');
  }
});

exports.getLeadPasteTolerancesById = asyncHandler (async (req, res) => {
  const leadPasteTolerancesById = await db.dopuskiOlovnaPasta.findOne ({
    attributes: [
      'id',
      'leadPasteName',
      'cardNumber',
      'nominalDensity',
      'nominalDensityMin1',
      'nominalDensityMin2',
      'nominalDensityMax1',
      'nominalDensityMax2',
    ],
    where: {
      id: req.params.id,
    },
  });

  if (leadPasteTolerancesById) {
    res.json (leadPasteTolerancesById);
  } else {
    res.status (404);
    throw new Error ('Ooops...Something went wrong!');
  }
});

exports.updateLeadPasteTolerancesById = asyncHandler (async (req, res) => {
  const updatedLeadPasteTolerancesById = await db.dopuskiOlovnaPasta.update (
    {
      leadPasteName: req.body.leadPasteName,
      cardNumber: req.body.cardNumber,
      nominalDensity: req.body.nominalDensity,
      nominalDensityMin1: req.body.nominalDensityMin1,
      nominalDensityMin2: req.body.nominalDensityMin2,
      nominalDensityMax1: req.body.nominalDensityMax1,
      nominalDensityMax2: req.body.nominalDensityMax2,
    },
    {
      where: {id: req.params.id},
    }
  );

  if (updatedLeadPasteTolerancesById) {
    res.json (updatedLeadPasteTolerancesById);
  } else {
    res.status (404);
    throw new Error ('Ooops...Something went wrong!');
  }
});

exports.createLeadPasteTolerances = asyncHandler (async (req, res) => {
  const newLeadPasteTolerances = await db.dopuskiOlovnaPasta.create ({
    leadPasteName: req.body.leadPasteName,
    cardNumber: req.body.cardNumber,
    nominalDensity: req.body.nominalDensity,
    nominalDensityMin1: req.body.nominalDensityMin1,
    nominalDensityMin2: req.body.nominalDensityMin2,
    nominalDensityMax1: req.body.nominalDensityMax1,
    nominalDensityMax2: req.body.nominalDensityMax2,
  });

  if (newLeadPasteTolerances) {
    res.json (newLeadPasteTolerances);
  } else {
    res.status (404);
    throw new Error ('Ooops...Something went wrong!');
  }
});
