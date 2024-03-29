'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      zvenoId: {
        type: Sequelize.INTEGER,
      },
      role: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'user',
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      operatorName: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('Users');
  },
};
