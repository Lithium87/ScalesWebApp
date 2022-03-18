const asyncHandler = require ('express-async-handler');
const db = require ('../../models/index');
const Scale = db['scale'];

exports.getAllScales = asyncHandler (async (req, res) => {
  const scales = await Scale.findAll ();
  console.log (scales);
});
