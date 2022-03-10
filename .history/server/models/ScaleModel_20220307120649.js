const {Model, DataTypes, UUIDV4} = require ('sequelize');
const sequelize = require ('../database');

class Scale extends Model {}

Scale.init (
  {
    scaleId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
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
