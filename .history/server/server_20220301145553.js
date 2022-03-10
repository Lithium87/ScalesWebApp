const express = require ('express');
const dotenv = require ('dotenv');
const colors = require ('colors');
const morgan = require ('morgan');
const sequelize = require ('./database');
const Operator = require ('./models/OperatorModel');
const Zvena = require ('./models/Zvena');
const Measurement = require ('./models/MeasurementModel');
const Scale = require ('./models/ScaleModel');
const Material = require ('./models/MaterialModel');
const User = require ('./models/UserModel');
const materials = require ('./data/materials');
const measurements = require ('./data/measurements');
const operators = require ('./data/operators');
const scales = require ('./data/scales');
const users = require ('./data/users');
const zvena = require ('./data/zvena');
const {notFound, errorHandler} = require ('./middleware/errorMiddleware');

dotenv.config ();

const app = express ();

if (process.env.NODE_ENV === 'development') {
  app.use (morgan ('dev'));
}

app.use (express.json ());

app.use (notFound);
app.use (errorHandler);

Operator.belongsTo (Zvena, {foreignKeyConstraint: 'zvenoId'});
Zvena.hasMany (Operator, {foreignKeyConstraint: 'zvenoId'});
Measurement.belongsTo (Scale, {foreignKeyConstraint: 'scaleId'});
Scale.hasMany (Measurement, {foreignKeyConstraint: 'scaleId'});
Measurement.belongsTo (Material, {foreignKeyConstraint: 'materialId'});
Material.hasMany (Measurement, {foreignKeyConstraint: 'materialId'});
User.belongsTo (Operator, {foreignKeyConstraint: 'operatorId'});
Operator.hasOne (User, {foreignKeyConstraint: 'operatorId'});
User.belongsTo (Zvena, {foreignKeyConstraint: 'zvenoId'});
Zvena.hasMany (User, {foreignKeyConstraint: 'zvenoId'});

sequelize.sync ().then (() => console.log ('DB is ready'.cyan.bold));

const port = process.env.PORT || 5000;

app.listen (port, () => {
  console.log (
    `Server running in ${process.env.NODE_ENV} mode on port ${port}.`.yellow
      .bold
  );
});
