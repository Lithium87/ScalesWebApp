const {Sequelize} = require ('sequelize');
const dotenv = require ('dotenv');
const colors = require ('colors');
const materials = require ('./data/materials.json');
const measurements = require ('./data/measurements.json');
const operators = require ('./data/operators.json');
const scales = require ('./data/scales.json');
const users = require ('./data/users.json');
const zvena = require ('./data/zvena.json');
const Material = require ('./models/MaterialModel');
const Measurement = require ('./models/MeasurementModel');
const Operator = require ('./models/OperatorModel');
const Scale = require ('./models/ScaleModel');
const User = require ('./models/UserModel');
const Zvena = require ('./models/Zvena');

const sequelize = new Sequelize ('web-scales', null, null, {
  dialect: 'sqlite',
  storage: './server/WebScales.sqlite',
});

dotenv.config ();

const importData = async () => {
  try {
    await Material.destroy ({where: {}});
    await Measurement.destroy ({where: {}});
    await Operator.destroy ({where: {}});
    await Scale.destroy ({where: {}});
    await User.destroy ({where: {}});
    await Zvena.destroy ({where: {}});

    await Material.bulkCreate (materials);
    await Measurement.bulkCreate (measurements);
    await Operator.bulkCreate (operators);
    await Scale.bulkCreate (scales);
    await User.bulkCreate (users);
    await Zvena.bulkCreate (zvena);

    console.log ('Data imported!'.green.inverse);
    process.exit ();
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

    console.log ('Data deleted!'.red.inverse);
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
