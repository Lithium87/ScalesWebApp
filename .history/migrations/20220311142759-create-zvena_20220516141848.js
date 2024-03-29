'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('Zvena', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      zvenoName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          max: 255,
        },
      },
      zvenoPassword: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          max: 8,
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('Zvena');
  },
};
