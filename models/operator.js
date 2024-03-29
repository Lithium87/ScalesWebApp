'use strict';
const {Model} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operator extends Model {
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
    }
  }
  Operator.init (
    {
      operatorName: {
        type: DataTypes.STRING,
        validate: {
          max: 255,
        },
      },
      operatorCardNumber: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        defaultValue: 0,
      },
      zvenoName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          max: 255,
        },
      },
      zvenoId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Operator',
      timestamps: false,
    }
  );
  return Operator;
};
