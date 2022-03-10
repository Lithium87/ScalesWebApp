const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../database');

class Operator extends Model {}

Operator.init (
  {
    operatorId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
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
