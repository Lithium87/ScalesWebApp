'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('Measurements', {
      measurementId: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      scaleId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      materialId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      materialName: {
        type: Sequelize.DataTypes.STRING,
        validate: {
          max: 255,
        },
      },
      operatorName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
          max: 100,
        },
      },
      weight: {
        type: Sequelize.DataTypes.FLOAT,
      },
      density: {
        type: Sequelize.DataTypes.FLOAT,
      },
      mixer: {
        type: Sequelize.DataTypes.INTEGER,
      },
      byrkalo: {
        type: Sequelize.DataTypes.INTEGER,
      },
      penetration: {
        type: Sequelize.DataTypes.INTEGER,
      },
      nominal: {
        type: Sequelize.DataTypes.REAL,
        allowNull: false,
        defaultValue: 0,
      },
      deviation: {
        type: Sequelize.DataTypes.REAL,
        allowNull: false,
        defaultValue: 0,
      },
      tact: {
        type: Sequelize.DataTypes.REAL,
        defaultValue: 0,
      },
      tactDeviation: {
        type: Sequelize.DataTypes.REAL,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('Measurements');
  },
};
