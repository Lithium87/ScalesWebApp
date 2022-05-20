'use strict';
const {Model} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mixer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      models.Byrkalo.belongsTo (models.Mixer, {
        foreignKey: 'mixerId',
        constraints: false,
      });
      models.Mixer.hasMany (models.Byrkalo);
    }
  }
  Mixer.init (
    {
      mixerNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'Mixer',
      tableName: 'Mixer',
      timestamps: false,
    }
  );
  return Mixer;
};
