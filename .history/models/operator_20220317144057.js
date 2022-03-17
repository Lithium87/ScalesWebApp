'use strict';
const {Model} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Operator.belongsTo (models.Zvena, {
        foreignKey: 'zvenoId',
        constraint: false,
      });
      Zvena.hasMany (models.Operator, {foreignKey: 'zvenoId'});
    }
  }
  Operator.init (
    {
      operatorName: {
        type: DataTypes.STRING,
        validate: {
          max: 255,
        },
      },
      operatorCardNumber: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        defaultValue: 0,
      },
      zvenoId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Operator',
    }
  );
  return Operator;
};
