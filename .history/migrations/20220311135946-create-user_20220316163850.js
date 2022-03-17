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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint ('Users', {
      fields: ['zvenoId'],
      type: 'foreign key',
      name: 'user_zvena_fk',
      references: {
        table: 'Users',
        field: 'id',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('Users');
    await queryInterface.removeConstraint ('Users', 'user_zvena_fk');
  },
};
