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

  console.log (plateGratingsTolerances);
});
