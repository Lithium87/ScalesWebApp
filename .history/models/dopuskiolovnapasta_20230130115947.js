'use strict';
const {Model} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dopuskiOlovnaPasta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      models.dopuskiOlovnaPasta.belongsTo (models.Material, {
        foreignKey: 'materialId',
        constraints: false,
      });
      models.Material.hasMany (models.dopuskiOlovnaPasta);
    }
  }
  dopuskiOlovnaPasta.init (
    {
      leadPasteName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          max: 255,
        },
      },
      cardNumber: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        defaultValue: 0,
      },
      nominalDensity: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 150.00,
      },
      nominalDensityMin1: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      nominalDensityMax1: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      nominalDensityMin2: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      nominalDensityMax2: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      minPenetration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      maxPenetration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      materialId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'dopuskiOlovnaPasta',
      tableName: 'DopuskiOlovnaPasta',
      timestamps: false,
    }
  );
  return dopuskiOlovnaPasta;
};
