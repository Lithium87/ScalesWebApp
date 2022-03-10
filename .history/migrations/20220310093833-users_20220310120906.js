'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('Users', {
      userId: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
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
        type: DataTypes.STRING,
      },
      zvenoId: {
        type: DataTypes.INTEGER,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.deleteTable ('Users');
  },
};
