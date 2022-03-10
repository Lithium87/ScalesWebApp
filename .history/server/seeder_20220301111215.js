const {Sequelize} = require ('sequelize');
const dotenv = require ('dotenv');
const colors = require ('colors');
const materials = require ('./data/materials');
const measurements = require ('./data/measurements');
const operators = require ('./data/operators');
const scales = require ('./data/scales');
const users = require ('./data/users');
const zvena = require ('./data/zvena');
const Material = require ('./models/MaterialModel');
const Measurement = require ('./models/MeasurementModel');
const Operator = require ('./models/OperatorModel');
const Scale = require ('./models/ScaleModel');
const User = require ('./models/UserModel');
const Zvena = require ('./models/Zvena');
const sequelize = require ('./database');

dotenv.config ();

const importData = async () => {
  try {
    await Material.destroy ({where: {}});
    await Measurement.destroy ({where: {}});
    await Operator.destroy ({where: {}});
    await Scale.destroy ({where: {}});
    await User.destroy ({where: {}});
    await Zvena.destroy ({where: {}});

    await Material.bulkInsert (materials, {sequelize});
    await Measurement.bulkInsert (measurements, {sequelize});
    await Operator.bulkInsert (operators, {sequelize});
    await Scale.bulkInsert (scales, {sequelize});
    await User.bulkInsert (users, {sequelize});
    await Zvena.bulkInsert (zvena, sequelize);

    console.log ('Data imported!'.green.inverse);
  } catch (error) {
    console.error (`${error}`.red.inverse);
    process.exit (1);
  }
};

const deleteData = async () => {
  try {
    await Material.destroy ({where: {}});
    await Measurement.destroy ({where: {}});
    await Operator.destroy ({where: {}});
    await Scale.destroy ({where: {}});
    await User.destroy ({where: {}});
    await Zvena.destroy ({where: {}});

    console.log ('Data destroyed!'.red.inverse);
    process.exit ();
  } catch (error) {
    console.error (`${error}`.red.inverse);
    process.exit (1);
  }
};

if (process.argv[2] === '-d') {
  deleteData ();
} else {
  importData ();
}
