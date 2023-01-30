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
        foreignKey: 'materialId',
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
      nominal: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 100.00,
      },
      nominalMin1: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      nominalMax1: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      nominalMin2: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      nominalMax2: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      sampleTime: {
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
      modelName: 'dopuskiPlo4iRe6etki',
      tableName: 'DopuskiPlo4iRe6etki',
      timestamps: false,
    }
  );
  return dopuskiPlo4iRe6etki;
};
