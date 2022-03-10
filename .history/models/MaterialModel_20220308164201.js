const {Sequelize, Model, DataTypes} = require ('sequelize');
const sequelize = require ('../config/config.json');

class Material extends Model {}

Material.init (
  {
    materialId: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
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
