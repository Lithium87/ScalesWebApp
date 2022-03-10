const {Sequelize} = require ('sequelize');
const dotenv = require ('dotenv');
const colors = require ('colors');
// const materials = require ('./data/materials.json');
// const measurements = require ('./data/measurements.json');
// const operators = require ('./data/operators.json');
// const scales = require ('./data/scales.json');
// const users = require ('./data/users.json');
// const zvena = require ('./data/zvena.json');
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

    await Material.bulkCreate ([
      {
        materialName: 'Плочи',
        cardNo: 111,
      },
      {
        materialName: 'Плочи (с четец на карти)',
        cardNo: 112,
      },
      {
        materialName: 'Решетки',
        cardNo: 113,
      },
      {
        materialName: 'Оловна паста',
        cardNo: 114,
      },
    ]);
    await Measurement.bulkCreate ([
      {
        scaleId: 5,
        materialId: 2,
        materialName: 'Плочи (с четец на карти)',
        operatorName: 'Явор Ягодов Малинов',
        weight: 50.55,
        density: 1.52,
        mixer: 1,
        byrkalo: 1,
        penetration: 1,
      },
      {
        scaleId: 5,
        materialId: 2,
        materialName: 'Плочи (с четец на карти)',
        operatorName: 'Явор Ягодов Малинов',
        weight: 78.55,
        density: 1.52,
        mixer: 1,
        byrkalo: 1,
        penetration: 1,
      },
      {
        scaleId: 2,
        materialId: 3,
        materialName: 'Решетки',
        operatorName: 'Ясен Яворов Кленов',
        weight: 60.05,
        density: 1.52,
        mixer: 1,
        byrkalo: 1,
        penetration: 1,
      },
      {
        scaleId: 9,
        materialId: 4,
        materialName: 'Оловна паста',
        operatorName: 'Мика Зайкова Дългоушева',
        weight: 180.95,
        density: 10.52,
        mixer: 1,
        byrkalo: 1,
        penetration: 1,
      },
      {
        scaleId: 9,
        materialId: 4,
        materialName: 'Оловна паста',
        operatorName: 'Мика Зайкова Дългоушева',
        weight: 98.95,
        density: 10.52,
        mixer: 1,
        byrkalo: 1,
        penetration: 1,
      },
      {
        scaleId: 9,
        materialId: 4,
        materialName: 'Оловна паста',
        operatorName: 'Мика Зайкова Дългоушева',
        weight: 80.68,
        density: 11.52,
        mixer: 1,
        byrkalo: 1,
        penetration: 1,
      },
      {
        scaleId: 6,
        materialId: 1,
        materialName: 'Плочи',
        operatorName: 'Маруля Петрова Петрова',
        weight: 30.95,
        density: 3.52,
        mixer: 1,
        byrkalo: 1,
        penetration: 1,
      },
    ]);
    await Operator.bulkCreate ([
      {
        zvenoId: 1,
        operatorName: 'Явор Ягодов Малинов',
        operatorCardNumber: 111111,
      },
      {
        zvenoId: 1,
        operatorName: 'Ясен Яворов Кленов',
        operatorCardNumber: 111112,
      },
      {
        zvenoId: 1,
        operatorName: 'Маруля Петрова Петрова',
        operatorCardNumber: 111113,
      },
      {
        zvenoId: 2,
        operatorName: 'Карфиол Петров Петров',
        operatorCardNumber: 111114,
      },
      {
        zvenoId: 2,
        operatorName: 'Мика Зайкова Дългоушева',
        operatorCardNumber: 111115,
      },
      {
        zvenoId: 2,
        operatorName: 'Асен Асенов Сербезов',
        operatorCardNumber: 111116,
      },
    ]);
    await Scale.bulkCreate ([
      {
        scaleAddress: 1,
        scaleNo: 1,
        scaleName: 'Везна № 1',
      },
      {
        scaleAddress: 2,
        scaleNo: 2,
        scaleName: 'Везна № 2',
      },
      {
        scaleAddress: 3,
        scaleNo: 3,
        scaleName: 'Везна № 3',
      },
      {
        scaleAddress: 4,
        scaleNo: 4,
        scaleName: 'Везна № 4',
      },
      {
        scaleAddress: 5,
        scaleNo: 5,
        scaleName: 'Везна № 5',
      },
      {
        scaleAddress: 6,
        scaleNo: 6,
        scaleName: 'Везна № 6',
      },
      {
        scaleAddress: 7,
        scaleNo: 7,
        scaleName: 'Везна № 7',
      },
      {
        scaleAddress: 8,
        scaleNo: 8,
        scaleName: 'Везна № 8',
      },
      {
        scaleAddress: 9,
        scaleNo: 9,
        scaleName: 'Везна № 9',
      },
      {
        scaleAddress: 10,
        scaleNo: 10,
        scaleName: 'Везна № 10',
      },
      {
        scaleAddress: 11,
        scaleNo: 11,
        scaleName: 'Везна № 11',
      },
      {
        scaleAddress: 12,
        scaleNo: 12,
        scaleName: 'Везна № 12',
      },
      {
        scaleAddress: 13,
        scaleNo: 13,
        scaleName: 'Везна № 13',
      },
      {
        scaleAddress: 14,
        scaleNo: 14,
        scaleName: 'Везна № 14',
      },
    ]);
    await User.bulkCreate ([
      {
        role: 'admin',
        username: 'Админ Администраторов',
      },
      {
        role: 'technologist',
        username: 'Технолог 1',
      },
      {
        role: 'user',
        username: 'Явор Ягодов Малинов',
        operatorName: 'Явор Ягодов Малинов',
        zvenoId: 1,
      },
      {
        role: 'user',
        username: 'Ясен Яворов Кленов',
        operatorName: 'Ясен Яворов Кленов',
        zvenoId: 1,
      },
      {
        role: 'user',
        username: 'Маруля Петрова Петрова',
        operatorName: 'Маруля Петрова Петрова',
        zvenoId: 1,
      },
      {
        role: 'user',
        username: 'Карфиол Петров Петров',
        operatorName: 'Карфиол Петров Петров',
        zvenoId: 2,
      },
      {
        role: 'user',
        username: 'Мика Зайкова Дългоушева',
        operatorName: 'Мика Зайкова Дългоушева',
        zvenoId: 2,
      },
      {
        role: 'user',
        username: 'Асен Асенов Сербезов',
        operatorName: 'Асен Асенов Сербезов',
        zvenoId: 2,
      },
    ]);
    await Zvena.bulkCreate ([
      {
        zvenoName: 'Пастиране',
        zvenoPassword: 'zveno1',
      },
      {
        zvenoName: 'Леярен',
        zvenoPassword: 'zveno2',
      },
    ]);

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
