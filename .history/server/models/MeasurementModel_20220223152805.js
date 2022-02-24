const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../database');

class Measurement extends Model {}

Measurement.init (
  {
    measurementId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    scaleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    materialName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 255,
      },
    },
    operatorName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 100,
      },
    },
    measurementTime: {
      type: DataTypes.TIME,
    },
    measurementDate: {
      type: DataTypes.DATE,
    },
    weight: {
      type: DataTypes.FLOAT,
    },
    density: {
      type: DataTypes.FLOAT,
    },
    mixer: {
      type: DataTypes.INTEGER,
    },
    byrkalo: {
      type: DataTypes.INTEGER,
    },
    penetration: {
      type: DataTypes.INTEGER,
    },
    nominal: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0,
    },
    deviation: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0,
    },
    tact: {
      type: DataTypes.REAL,
      defaultValue: 0,
    },
    tactDeviation: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {sequelize}
);
