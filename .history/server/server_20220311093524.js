const express = require ('express');
const dotenv = require ('dotenv');
const colors = require ('colors');
const morgan = require ('morgan');
const sequelize = require ('../config/config.json');
const Operator = require ('../models/OperatorModel');
const Zvena = require ('../models/Zvena');
const Measurement = require ('../models/MeasurementModel');
const Scale = require ('../models/ScaleModel');
const Material = require ('../models/MaterialModel');
const User = require ('../models/UserModel');
const {notFound, errorHandler} = require ('./middleware/errorMiddleware');

dotenv.config ();

const app = express ();

if (process.env.NODE_ENV === 'development') {
  app.use (morgan ('dev'));
}

app.use (express.json ());

app.use (notFound);
app.use (errorHandler);

Operator.belongsTo (Zvena, {foreignKey: 'zvenoId', foreignKeyConstraint: true});
Zvena.hasMany (Operator, {foreignKey: 'zvenoId', foreignKeyConstraint: true});
Measurement.belongsTo (Scale, {
  foreignKey: 'scaleId',
  foreignKeyConstraint: true,
});
Scale.hasMany (Measurement, {
  foreignKey: 'scaleId',
  foreignKeyConstraint: true,
});
Measurement.belongsTo (Material, {
  foreignKey: 'materialId',
  foreignKeyConstraint: true,
});
Material.hasMany (Measurement, {
  foreignKey: 'materialId',
  foreignKeyConstraint: true,
});
User.belongsTo (Operator, {
  foreignKey: 'operatorId',
  foreignKeyConstraint: true,
});
Operator.hasOne (User, {foreignKey: 'operatorId', foreignKeyConstraint: true});
User.belongsTo (Zvena, {foreignKey: 'zvenoId', foreignKeyConstraint: true});
Zvena.hasMany (User, {foreignKey: 'zvenoId', foreignKeyConstraint: true});

const port = process.env.PORT || 5000;

app.listen (port, () => {
  console.log (
    `Server running in ${process.env.NODE_ENV} mode on port ${port}.`.yellow
      .bold
  );
});
