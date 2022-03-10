const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../config/config.json');

class User extends Model {}

User.init (
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
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
  {
    sequelize,
  }
);

module.exports = User;
