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
        foreignKey: 'typeId',
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
      nominalMin1: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.00,
        field: 'Nominal density (-)',
      },
      nominalMax1: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.00,
        field: 'Nominal density (+)',
      },
      nominalMin2: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.00,
        field: 'Nominal density (--)',
      },
      nominalMax2: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.00,
        field: 'Nominal density (++)',
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
