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

    await new Material.create (materials);
    await new Measurement.create (measurements);
    await new Operator.create (operators);
    await new Scale.create (scales);
    await new User.create (users);
    await new Zvena.create (zvena);

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
