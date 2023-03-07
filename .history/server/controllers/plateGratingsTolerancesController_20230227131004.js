const asyncHandler = require ('express-async-handler');
const {Op} = require ('sequelize');
const {QueryTypes} = require ('sequelize');
const {sequelize} = require ('../../models');
const db = require ('../../models');

exports.getPlateGratingsTolerances = asyncHandler (async (req, res) => {
  const plateGratingsTolerances = await sequelize.query (
    'SELECT * FROM DopuskiPlo4iRe6etki',
    {type: QueryTypes.SELECT}
  );

  if (plateGratingsTolerances) {
    res.json (plateGratingsTolerances);
  } else {
    res.status (404);
    throw new Error ('Ooops...Something went wrong');
  }
});

exports.getPlateGratingsToleranceById = asyncHandler (async (req, res) => {
  const plateGratingsToleranceById = await db.dopuskiPlo4iRe6etki.findAll ({
    attributes: [
      'id',
      'plateGridName',
      'cardNumber',
      'nominal',
      'nominalMin1',
      'nominalMin2',
      'nominalMax1',
      'nominalMax2',
    ],
    where: {
      id: req.params.id,
    },
  });

  if (plateGratingsToleranceById) {
    res.json (plateGratingsToleranceById);
  } else {
    res.status (404);
    throw new Error ('Ooops...Something went wrong');
  }
});

exports.updatePlateGratingsTolerancesById = asyncHandler (async (req, res) => {
  const plateGratingsTolerancesById = await sequelize.query (
    'UPDATE DopuskiPlo4iRe6etki SET plateGridName = req.body.plateGridName, cardNumber = req.body.cardNumber, nominal = req.body.nominal, nominalMin1 = req.body.nominalMin1, nominalMin2 = req.body.nominalMin2, nominalMax1 = req.body.nominalMax1, nominalMax2 = req.body.nominalMax2 WHERE id = req.params.id',
    {type: QueryTypes.UPDATE}
  );

  if (plateGratingsTolerancesById) {
    res.json (plateGratingsTolerancesById);
  } else {
    res.status (404);
    throw new Error ('Ooops...Something went wrong');
  }
});

// exports.updatePlateGratingsTolerancesById = asyncHandler (async (req, res) => {
//   const updatedPlateGratingsTolerancesById = await db.dopuskiPlo4iRe6etki.findAll (
//     {
//       attributes: [
//         'plateGridName',
//         'cardNumber',
//         'nominal',
//         'nominalMin1',
//         'nominalMin2',
//         'nominalMax1',
//         'nominalMax2',
//       ],
//       where: {
//         id: req.params.id,
//       },
//     }
//   );

//   console.log (req.body);

//     if (updatedPlateGratingsTolerancesById) {
//       res.json (updatedPlateGratingsTolerancesById);
//     } else {
//       res.status (404);
//       throw new Error ('Ooops...Something went wrong.');
//     }
// });
