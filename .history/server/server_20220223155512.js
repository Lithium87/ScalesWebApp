const express = require ('express');
const dotenv = require ('dotenv');
const morgan = require ('morgan');
const sequelize = require ('./database');
const Operator = require ('./models/OperatorModel');
const Zvena = require ('./models/Zvena');
const Measurement = require ('./models/MeasurementModel');
const Scale = require ('./models/ScaleModel');
const {notFound, errorHandler} = require ('./middleware/errorMiddleware');

dotenv.config ();

const app = express ();

if (process.env.NODE_ENV === 'development') {
  app.use (morgan ('dev'));
}

app.use (express.json ());

app.use (notFound);
app.use (errorHandler);

Operator.belongsTo (Zvena, {foreignKeyConstraint: zvenoId});
Zvena.hasMany (Operator, {foreignKeyConstraint: zvenoId});
Measurement.belongsTo (Scale, {foreignKeyConstraint: scaleId});
Scale.hasMany (Measurement, {foreignKeyConstraint: scaleId});

sequelize.sync ({force: true}).then (() => console.log ('DB is ready'));

const port = process.env.PORT || 5000;

app.listen (port, () => {
  console.log (
    `Server running in ${process.env.NODE_ENV} mode on port ${port}.`
  );
});
