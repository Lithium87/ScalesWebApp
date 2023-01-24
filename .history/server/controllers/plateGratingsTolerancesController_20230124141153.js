const asyncHandler = require ('express-async-handler');
const {Op} = require ('sequelize');
const {sequelize} = require ('../../models');
const db = require ('../../models');

exports.getPlateGratingsTolerances = asyncHandler (async (req, res) => {
  const plateGratingsTolerances = await db.dopuskiPlo4iRe6etki.findAll ();

  console.log (plateGratingsTolerances);
});
