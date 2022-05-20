'use strict';
const {Model} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zveno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      models.Operator.belongsTo (models.Zveno, {
        foreignKey: 'zvenoId',
        constraints: false,
      });
      models.Zveno.hasMany (models.Operator);

      models.User.belongsTo (models.Zveno, {
        foreignKey: 'zvenoId',
        constraints: false,
      });
      models.Zveno.hasMany (models.User);
    }
  }
  Zveno.init (
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
      timestamps: false,
    }
  );
  return Zveno;
};
