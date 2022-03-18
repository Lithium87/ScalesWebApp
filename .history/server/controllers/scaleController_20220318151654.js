const sqlite3 = require ('sqlite3');
const asyncHandler = require ('express-async-handler');

let db = new sqlite3.Database ('../WebScales.sqlite', err => {
  if (err) console.error (err.message);
  console.log ('Connected to WebScales DB!');
});

exports.getAllScales = asyncHandler (async (req, res) => {});
