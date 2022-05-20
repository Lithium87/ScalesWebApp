'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('Scales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      typeId: {
        type: Sequelize.INTEGER,
      },
      scaleAddress: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      scaleNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      scaleName: {
        type: Sequelize.STRING,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('Scales');
  },
};
