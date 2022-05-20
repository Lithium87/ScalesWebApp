'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('Byrkala', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      byrkaloNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      mixerId: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('Byrkala');
  },
};
