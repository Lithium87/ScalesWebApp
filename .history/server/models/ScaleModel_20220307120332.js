const {Model, DataTypes, UUIDV4, UUIDV1} = require ('sequelize');
const sequelize = require ('../database');

class Scale extends Model {}

Scale.init (
  {
    scaleId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV1,
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
  }
);

module.exports = Scale;
