const {Sequelize, Model, DataTypes} = require ('sequelize');
const sequelize = require ('../database');

class Zvena extends Model {}

Zvena.init (
  {
    zvenoId: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      unique: true,
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

Zvena.removeAttribute ('id');

module.exports = Zvena;
