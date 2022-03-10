const {Model, DataTypes} = require ('sequelize');
const users = require ('./data/users');
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
    role: {
      type: DataTypes.ENUM,
      values: ['admin', 'technologist', 'user'],
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    operatorName: {
      type: DataTypes.STRING,
    },
    zvenoId: {
      type: DataTypes.INTEGER,
    },
  },
  {sequelize}
);

User.bulkCreate (users);

module.exports = User;
