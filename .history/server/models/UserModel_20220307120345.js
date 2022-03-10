const {Model, DataTypes, UUIDV4, UUIDV1} = require ('sequelize');
const sequelize = require ('../database');

class User extends Model {}

User.init (
  {
    userId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV1,
      primaryKey: true,
      autoIncrement: true,
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
