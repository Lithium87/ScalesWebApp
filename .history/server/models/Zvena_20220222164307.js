const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../database.js');

class Zvena extends Model {}

Zvena.init (
  {
    zvenoId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    zvenoName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 50,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
  }
);

module.exports = Zvena;
