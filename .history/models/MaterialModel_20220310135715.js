const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../config/config.json');

class Material extends Model {}

Material.init (
  {
    materialId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
    },
    materialName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 255,
      },
    },
    cardNo: {
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
