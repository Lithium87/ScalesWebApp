const {Sequelize, Model, DataTypes} = require ('sequelize');
const sequelize = require ('../database');
const uuidv4 = require ('uuid/v4');

class Scale extends Model {}

Scale.init (
  {
    scaleId: {
      type: DataTypes.UUID,
      unique: true,
      primaryKey: true,
      isUUID: 4,
      defaultValue: uuidv4 (),
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

Scale.removeAttribute ('id');

module.exports = Scale;
