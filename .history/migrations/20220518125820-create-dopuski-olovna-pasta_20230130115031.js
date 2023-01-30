'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('dopuskiOlovnaPasta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      leadPasteName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          max: 255,
        },
      },
      cardNumber: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        defaultValue: 0,
      },
      nominalDensityMin1: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      nominalDensityMax1: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      nominalDensityMin2: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      nominalDensityMax2: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      minPenetration: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      maxPenetration: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      materialId: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('dopuskiOlovnaPasta');
  },
};
