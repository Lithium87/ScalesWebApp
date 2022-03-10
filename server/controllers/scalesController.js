const asyncHandler = require ('express-async-handler');
const Scale = require ('../../models/ScaleModel');

const getAllScales = asyncHandler (async (req, res) => {
  const scales = await Scale.findAll ();

  res.json (scales);
});

module.exports = {
  getAllScales,
};
