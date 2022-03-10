const {Model, DataTypes, UUIDV4, UUIDV1} = require ('sequelize');
const sequelize = require ('../database');

class Operator extends Model {}

Operator.init (
  {
    operatorId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV1,
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
  }
);

module.exports = Operator;
