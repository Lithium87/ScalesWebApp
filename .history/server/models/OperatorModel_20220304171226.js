const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../database');

class Operator extends Model {}

Operator.init (
  {
    operatorId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    zvenoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    operatorName: {
      type: DataTypes.STRING,
      validate: {
        max: 100,
      },
    },
    operatorCartNo: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    initialAutoIncrement: 1,
  }
);

module.exports = Operator;
