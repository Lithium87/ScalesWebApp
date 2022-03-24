const asyncHandler = require ('express-async-handler');
const db = require ('../../models');

exports.getAllScales = asyncHandler (async (req, res) => {
  const scales = await db.Scales.findAll ();

  if (scales) {
    console.log (scales[0].dataValues);
    res.json (scales);
  } else {
    res.status (404);
    throw new Error ('No scales!');
  }
});
