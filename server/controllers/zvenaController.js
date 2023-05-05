const asyncHandler = require ('express-async-handler');
const {Op, where} = require ('sequelize');
const db = require ('../../models');

exports.getZvena = asyncHandler (async (req, res) => {
  const zvena = await db.Zveno.findAll ();

  if (zvena) {
    res.json (zvena);
  } else {
    res.sendStatus (404);
    throw new Error ('Ooops...Something went wrong.');
  }
});
