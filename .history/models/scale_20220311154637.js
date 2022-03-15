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
    }
  }
  Scale.init (
    {
      scaleAddress: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      scaleNumber: {
        type: DataTypesINTEGER,
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
