const {Model, DataTypes} = require ('sequelize');
const {v4: UUIDV4} = require ('uuid');
const sequelize = require ('../database');

class Zvena extends Model {}

Zvena.init (
  {
    zvenoId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    zvenoName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 50,
      },
    },
    zvenoPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 8,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
  }
);

module.exports = Zvena;
