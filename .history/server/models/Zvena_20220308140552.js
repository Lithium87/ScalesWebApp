const {Sequelize, Model, DataTypes} = require ('sequelize');
const sequelize = require ('../database');
const uuidv4 = require ('uuid/v4');

class Zvena extends Model {}

Zvena.init (
  {
    zvenoId: {
      type: DataTypes.UUID,
      unique: true,
      primaryKey: true,
      isUUID: 4,
      defaultValue: uuidv4 (),
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

Zvena.removeAttribute ('id');

module.exports = Zvena;
