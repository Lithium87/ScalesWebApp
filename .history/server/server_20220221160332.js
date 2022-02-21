const express = require ('express');
const dotenv = require ('dotenv');
const morgan = require ('morgan');
const sequelize = require ('./database');
const {notFound, errorHandler} = require ('./middleware/errorMiddleware');

dotenv.config ();

sequelize.sync ().then (console.log ('DB is ready'.green.bold));

const app = express ();

if (process.env.NODE_ENV === 'development') {
  app.use (morgan ('dev'));
}

app.use (express.json ());

app.use (notFound);
app.use (errorHandler);

const port = process.env.PORT || 5000;

app.listen (port, () => {
  console.log (
    `Server running in ${process.env.NODE_ENV} mode on port ${port}.`.yellow
      .bold
  );
});
