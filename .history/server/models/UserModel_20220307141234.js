const {Model, DataTypes} = require ('sequelize');
const {v4: UUIDV4} = require ('uuid');
const sequelize = require ('../database');

class User extends Model {}

User.init (
  {
    userId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4 (),
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
