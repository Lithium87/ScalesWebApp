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
      role: {
        type: Sequelize.ENUM,
        values: ['admin', 'technologist', 'user'],
        allowNull: false,
        defaultValue: 'user',
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      operatorName: Sequelize.STRING,
      zvenoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'zvena',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('Users');
  },
};
