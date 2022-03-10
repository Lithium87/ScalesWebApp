const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../database');

class Scale extends Model {}

Scale.init (
  {
    scaleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    scaleAddress: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    scaleNo: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    scaleName: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    initialAutoIncrement: 1,
  }
);

module.exports = Scale;
