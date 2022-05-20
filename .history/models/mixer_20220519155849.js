'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mixer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mixer.init({
    mixerNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mixer',
  });
  return Mixer;
};