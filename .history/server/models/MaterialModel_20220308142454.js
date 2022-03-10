const {Sequelize, Model, DataTypes} = require ('sequelize');
const sequelize = require ('../database');
const {v4: uuid} = require ('uuid');

class Material extends Model {}

Material.init (
  {
    materialId: {
      type: DataTypes.UUID,
      unique: true,
      primaryKey: true,
      isUUID: 4,
      defaultValue: uuidv4 (),
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

Material.removeAttribute ('id');

module.exports = Material;
