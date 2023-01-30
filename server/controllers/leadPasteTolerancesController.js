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
