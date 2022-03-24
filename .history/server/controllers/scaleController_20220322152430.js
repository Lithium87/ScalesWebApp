const asyncHandler = require ('express-async-handler');
const db = require ('../../models');

exports.getAllScales = asyncHandler (async (req, res) => {
  const scales = await db.Scale.findAll ();

  if (scales) {
    console.log (scales.name);
    res.json (scales);
  } else {
    res.status (404);
    throw new Error ('No scales!');
  }
});
