'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('Users', {
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      role: {
        type: Sequelize.DataTypes.ENUM,
        values: ['admin', 'technologist', 'user'],
        allowNull: false,
      },
      username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      operatorName: {
        type: Sequelize.DataTypes.STRING,
      },
      zvenoId: {
        type: Sequelize.DataTypes.INTEGER,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('Users');
  },
};
