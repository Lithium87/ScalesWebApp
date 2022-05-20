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
      nominalMin1: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
        field: 'Nominal (-)',
      },
      nominalMax1: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
        field: 'Nominal (+)',
      },
      nominalMin2: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
        field: 'Nominal (--)',
      },
      nominalMax2: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
        field: 'Nominal (++)',
      },
      sampleTime: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      typeId: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('dopuskiPlo4iRe6etki');
  },
};
