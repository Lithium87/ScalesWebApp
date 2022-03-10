const {Sequelize, Model, DataTypes} = require ('sequelize');
const sequelize = require ('../config/config.json');

class Operator extends Model {}

Operator.init (
  {
    operatorId: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      unique: true,
      primaryKey: true,
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

module.exports = Operator;
