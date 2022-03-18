const asyncHandler = require ('express-async-handler');
const sqlite3 = require ('sqlite3');
const Scale = require ('../../models/scale');

let db = new sqlite3.Database ('web-scales', {
  dialect: sqlite3,
  storage: '../WebScales.sqlite',
});

exports.getAllScales = asyncHandler (async (req, res) => {
  const scales = await Scale.findAll ();

  db.all (scales, (err, rows) => {
    if (err) return res.status (404).json ({error: err.message});
    res.json ({
      message: success,
      data: rows,
    });
  });
});
