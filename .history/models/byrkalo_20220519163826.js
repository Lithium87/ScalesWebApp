'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Byrkalo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Byrkalo.init({
    byrkaloNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Byrkalo',
  });
  return Byrkalo;
};