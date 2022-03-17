'use strict';
const {Model} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      User.belongsTo (models.Zvena, {
        foreignKey: 'zvenoId',
        constraints: false,
      });
      Zvena.hasMany (models.User);
    }
  }
  User.init (
    {
      role: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'user',
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      operatorName: DataTypes.STRING,
      zvenoId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
