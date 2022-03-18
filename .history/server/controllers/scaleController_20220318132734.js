const asyncHandler = require ('express-async-handler');
const Scale = require ('../../models/scale');

exports.getAllScales = asyncHandler (async (req, res) => {
  const scales = await Scale.findAll ();

  if (scales) {
    res.json (scales);
  } else {
    res.status (404);
    throw new Error ('No scales!');
  }
});
