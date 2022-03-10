const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../database');

class Scale extends Model {}

Scale.init (
  {
    scaleId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      field: 'id',
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
  }
);

module.exports = Scale;
