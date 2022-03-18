const sqlite3 = require ('sqlite3');
const asyncHandler = require ('express-async-handler');
const db = require ('../../models');
const Scale = require ('../../models').scale;

// let db = new sqlite3.Database ('../WebScales.sqlite', err => {
//   if (err) console.error (err.message);
//   console.log ('Connected to WebScales DB!');
// });

db.sequelize.authenticate ().then (
  function (err) {
    console.log ('Connection has been established successfully.');
  },
  function (err) {
    console.log ('Unable to connect to the database:', err);
  }
);

exports.getAllScales = asyncHandler (async (req, res) => {
  const scales = await Scale.findAll ();

  if (scales) {
    console.log (scales);
    res.json (scales);
  } else {
    res.status (404);
    throw new Error ('No scales!');
  }
});
