'use strict';
const {Model} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zvena extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Zvena.hasMany (models.Operator);
    }
  }
  Zvena.init (
    {
      zvenoName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          max: 255,
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
      modelName: 'Zvena',
      freezeTableName: true,
    }
  );
  return Zvena;
};
