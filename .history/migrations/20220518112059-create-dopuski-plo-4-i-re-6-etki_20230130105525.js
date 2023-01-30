'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('dopuskiPlo4iRe6etki', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      plateGridName: {
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
      nominal: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 100.00,
      },
      nominalMin1: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      nominalMax1: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      nominalMin2: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      nominalMax2: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
      },
      sampleTime: {
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
    await queryInterface.dropTable ('dopuskiPlo4iRe6etki');
  },
};
