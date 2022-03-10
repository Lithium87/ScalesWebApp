const {Sequelize, Model, DataTypes} = require ('sequelize');
const sequelize = require ('../database');
const uuidv4 = require ('uuid/v4');

class Operator extends Model {}

Operator.init (
  {
    operatorId: {
      type: DataTypes.UUID,
      unique: true,
      primaryKey: true,
      isUUID: 4,
      defaultValue: uuidv4 (),
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
  }
);

Operator.removeAttribute ('id');

module.exports = Operator;
