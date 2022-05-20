'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('Materials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      materialType: {
        type: Sequelize.STRING,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('Materials');
  },
};
