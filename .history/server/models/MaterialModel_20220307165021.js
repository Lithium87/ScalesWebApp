const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../database');

class Material extends Model {}

Material.init (
  {
    materialId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    materialName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 255,
      },
    },
    materialCardNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
  }
);

module.exports = Material;
