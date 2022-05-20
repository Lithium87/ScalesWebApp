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
        constraints: false,
      });
      models.Material.hasMany (models.Measurement);

      models.Scale.belongsTo (models.Material, {
        foreignKey: 'typeId',
        constraint: false,
      });
      models.Material.hasMany (models.Scale);

      models.dopuskiPlo4iRe6etki.belongsTo (models.Material, {
        foreignKey: 'typeId',
        constraints: false,
      });
      models.Material.hasMany (models.dopuskiPlo4iRe6etki);
    }
  }
  Material.init (
    {
      materialType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Material',
      timestamps: false,
    }
  );
  return Material;
};
