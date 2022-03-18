const express = require ('express');
const db = require ('../../models');
const dotenv = require ('dotenv');
const colors = require ('colors');
const morgan = require ('morgan');
const scaleRoutes = require ('./routes/scaleRoutes');
const {notFound, errorHandler} = require ('./middleware/errorMiddleware');

dotenv.config ();

const app = express ();

if (process.env.NODE_ENV === 'development') {
  app.use (morgan ('dev'));
}

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

app.use (notFound);
app.use (errorHandler);

const port = process.env.PORT || 5000;

app.listen (port, () => {
  console.log (
    `Server running in ${process.env.NODE_ENV} mode on port ${port}.`.yellow
      .bold
  );
});
