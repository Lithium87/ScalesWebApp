'use strict';
const {Model} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Byrkalo extends Model {
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
  Byrkalo.init (
    {
      byrkaloNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'Byrkalo',
      tableName: 'Byrkala',
      timestamps: false,
    }
  );
  return Byrkalo;
};
