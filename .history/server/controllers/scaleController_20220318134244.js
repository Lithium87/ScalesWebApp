const asyncHandler = require ('express-async-handler');
const sqlite3 = require ('sqlite3');
const Scale = require ('../../models/scale');

let db = new sqlite3.Database ('./WebScales.sqlite', err => {
  if (err) console.error (err.message);
  console.log ('Connected to WebScales DB!'.cyan.bold);
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
