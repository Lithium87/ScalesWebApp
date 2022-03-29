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
      models.Operator.belongsTo (models.Zvena, {
        foreignKey: 'zvenoId',
        constraints: false,
      });
      models.Zvena.hasMany (models.Operator);

      models.User.belongsTo (models.Zvena, {
        foreignKey: 'zvenoId',
        constraints: false,
      });
      models.Zvena.hasMany (models.User);
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
      modelName: 'Zveno',
      tableName: 'Zvena',
    }
  );
  return Zvena;
};
