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
      Scale.hasMany (models.Measurement);
      Measurement.belongsTo (models.Scale, {
        foreignKey: 'scaleId',
        constraint: false,
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
    },
    {
      sequelize,
      modelName: 'Scale',
    }
  );
  return Scale;
};
