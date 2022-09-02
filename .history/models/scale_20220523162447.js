'use strict';
const {Model} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      models.Scale.hasMany (models.Measurement);
      models.Measurement.belongsTo (models.Scale, {
        foreignKey: 'scaleId',
        constraints: false,
      });

      models.Material.hasMany (models.Scale);
      models.Scale.belongsTo (models.Material, {
        foreignKey: 'materialTypeId',
        constraints: false,
      });
    }
  }
  Scale.init (
    {
      scaleAddress: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      scaleNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      scaleName: {
        type: DataTypes.STRING,
      },
      materialTypeId: {
        types: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Scale',
      timestamps: false,
    }
  );
  return Scale;
};
