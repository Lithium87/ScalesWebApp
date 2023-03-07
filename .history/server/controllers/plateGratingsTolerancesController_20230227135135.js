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
  const updatedPlateGratingsTolerancesById = await db.dopuskiPlo4iRe6etki.findAll (
    {
      attributes: [
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
    }
  );

  console.log (req.body);

  if (updatedPlateGratingsTolerancesById) {
    (updatedPlateGratingsTolerancesById.plateGridName =
      req.body.plateGridName), (updatedPlateGratingsTolerancesById.cardNumber =
      req.body.cardNumber), (updatedPlateGratingsTolerancesById.nominal =
      req.body.nominal), (updatedPlateGratingsTolerancesById.nominalMin1 =
      req.body.nominalMin1), (updatedPlateGratingsTolerancesById.nominalMin2 =
      req.body.nominalMin2), (updatedPlateGratingsTolerancesById.nominalMax1 =
      req.body.nominalMax1), (updatedPlateGratingsTolerancesById.nominalMax2 =
      req.body.nominalMax2);

    await updatedPlateGratingsTolerancesById.save ();

    res.json (updatedPlateGratingsTolerancesById);
  } else {
    res.status (404);
    throw new Error ('Ooops...Something went wrong.');
  }
});
