const {Sequelize, Model, DataTypes} = require ('sequelize');
const sequelize = require ('../database');
const uuidv4 = require ('uuid/v4');

class User extends Model {}

User.init (
  {
    userId: {
      type: DataTypes.UUID,
      unique: true,
      primaryKey: true,
      isUUID: 4,
      defaultValue: uuidv4 (),
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

User.removeAttribute ('id');

module.exports = User;
