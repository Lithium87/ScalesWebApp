const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../database');

class User extends Model {}

User.init (
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    operatorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    zvenoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {sequelize}
);

module.exports = User;
