const sqlite3 = require ('sqlite3');
const asyncHandler = require ('express-async-handler');

let db = new sqlite3.Database ('../WebScales.sqlite', err => {
  if (err) console.error (err.message);
  console.log ('Connected to WebScales DB!');
});

exports.getAllScales = asyncHandler (async (req, res) => {
  const scales = await db.Scales.findAll ();

  if (scales) {
    console.log (scales);
    res.json (scales);
  } else {
    res.status (404);
    throw new Error ('No scales!');
  }
});
