'use strict';
const {Model} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      models.Measurement.belongsTo (models.Material, {
        foreignKey: 'materialId',
      });
    }
  }
  Material.init (
    {
      materialName: DataTypes.STRING,
      cardNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'Material',
    }
  );
  return Material;
};
