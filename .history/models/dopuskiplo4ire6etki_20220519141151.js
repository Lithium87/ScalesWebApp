'use strict';
const {Model} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dopuskiPlo4iRe6etki extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      models.dopuskiPlo4iRe6etki.belongsTo (models.Material, {
        foreignKey: 'typeId',
        constraints: false,
      });

      models.Material.hasMany (models.dopuskiPlo4iRe6etki);
    }
  }
  dopuskiPlo4iRe6etki.init (
    {
      plateGridName: {
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
        field: 'Nominal (-)',
      },
      nominalMax1: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.00,
        field: 'Nominal (+)',
      },
      nominalMin2: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.00,
        field: 'Nominal (--)',
      },
      nominalMax2: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.00,
        field: 'Nominal (++)',
      },
      sampleTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'dopuskiPlo4iRe6etki',
      tableName: 'DopuskiPlo4iRe6etki',
      timestamps: false,
    }
  );
  return dopuskiPlo4iRe6etki;
};
