'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('Zvena', {
      zvenoId: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      zvenoName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
          max: 50,
        },
      },
      zvenoPassword: {
        type: Sequelize.DataTypes.STRING,
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
