'use strict';
const {Model} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Measurement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Measurement.belongsTo (models.Material, {
        foreignKey: 'materialId',
        constraints: false,
      });
      Material.hasMany (models.Measurement, {
        foreignKey: 'materialId',
        constraints: false,
      });

      Measurement.belongsTo (models.Scale, {foreignKey: 'scaleId'});
      Scale.hasMany (models.Measurement, {foreignKey: 'scaleId'});
    }
  }
  Measurement.init (
    {
      materialName: {
        type: DataTypes.STRING,
        validate: {
          max: 255,
        },
      },
      operatorName: {
        type: DataTypes.STRING,
        validate: {
          max: 255,
        },
      },
      weight: DataTypes.FLOAT,
      density: DataTypes.FLOAT,
      mixer: DataTypes.INTEGER,
      byrkalo: DataTypes.INTEGER,
      penetration: DataTypes.INTEGER,
      nominal: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 100.00,
      },
      deviation: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0,
      },
      tact: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0,
      },
      tactDeviation: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0,
      },
      materialId: {
        type: DataTypes.INTEGER,
      },
      scaleId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Measurement',
    }
  );
  return Measurement;
};
