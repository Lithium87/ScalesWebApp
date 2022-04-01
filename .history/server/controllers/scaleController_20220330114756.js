const asyncHandler = require ('express-async-handler');
const db = require ('../../models');

exports.getAllScales = asyncHandler (async (req, res) => {
  const scales = await db.Scale.findAll ();

  if (scales) {
    res.json (scales);
  } else {
    res.status (404);
    throw new Error ('No scales!');
  }
});

exports.getScaleById = asyncHandler (async (req, res) => {
  const scale = await db.Scale.findOne ({where: {id: req.params.id}});

  if (scale) {
    res.json (scale);
  } else {
    res.status (404);
    throw new Error ('No scale found!');
  }
});
