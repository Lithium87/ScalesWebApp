const express = require ('express');
const cors = require ('cors');
const db = require ('../models');
const dotenv = require ('dotenv');
const colors = require ('colors');
const morgan = require ('morgan');
const scaleRoutes = require ('./routes/scaleRoutes');
const measurementRoutes = require ('./routes/measurementRoutes');
const operatorRoutes = require ('./routes/operatorRoutes');
const plateGratingsTolerancesRoutes = require ('./routes/plateGratingsTolerancesRoutes');
const leadPasteTolerancesRoutes = require ('./routes/leadPasteTolerancesRoutes');
const zvenaRoutes = require ('./routes/zvenaRoutes');
const {notFound, errorHandler} = require ('./middleware/errorMiddleware');

dotenv.config ();

const app = express ();

if (process.env.NODE_ENV === 'development') {
  app.use (morgan ('dev'));
}

app.use (cors ({credentials: true}));

app.use (express.json ());

db.sequelize.authenticate ().then (
  function (err) {
    console.log ('Connection has been established successfully.');
  },
  function (err) {
    console.log ('Unable to connect to the database:', err);
  }
);

app.use ('/api/scales', scaleRoutes);
app.use ('/api/measurements', measurementRoutes);
app.use ('/api/operators', operatorRoutes);
app.use (
  '/api/settings/plate_gratings_tolerances',
  plateGratingsTolerancesRoutes
);
app.use ('/api/settings/lead_paste_tolerances', leadPasteTolerancesRoutes);
app.use ('/api/zvena', zvenaRoutes);

app.use (notFound);
app.use (errorHandler);

const port = process.env.PORT || 5000;

app.listen (port, () => {
  console.log (
    `Server running in ${process.env.NODE_ENV} mode on port ${port}.`.yellow
      .bold
  );
});
