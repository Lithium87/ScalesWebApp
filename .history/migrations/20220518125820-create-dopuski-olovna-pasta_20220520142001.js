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
      nominalMin1: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
        field: 'Nominal density (-)',
      },
      nominalMax1: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
        field: 'Nominal density (+)',
      },
      nominalMin2: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
        field: 'Nominal density (--)',
      },
      nominalMax2: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0.00,
        field: 'Nominal density (++)',
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
      typeId: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('dopuskiOlovnaPasta');
  },
};
