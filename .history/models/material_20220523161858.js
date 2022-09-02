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
        foreignKey: 'materialTypeId',
        constraints: false,
      });
      models.Material.hasMany (models.Measurement);

      models.Scale.belongsTo (models.Material, {
        foreignKey: 'materialTypeId',
        constraints: false,
      });
      models.Material.hasMany (models.Scale);

      models.dopuskiPlo4iRe6etki.belongsTo (models.Material, {
        foreignKey: 'materialTypeId',
        constraints: false,
      });
      models.Material.hasMany (models.dopuskiPlo4iRe6etki);

      models.dopuskiOlovnaPasta.belongsTo (models.Material, {
        foreignKey: 'materialTypeId',
        constraints: false,
      });
      models.Material.hasMany (models.dopuskiOlovnaPasta);
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
