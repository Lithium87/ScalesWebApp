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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint ('Operators', {
      fields: ['zvenoId'],
      type: 'foreign key',
      name: 'operator_zvena_fk',
      references: {
        table: 'Zvena',
        field: 'id',
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
    await queryInterface.dropTable ('Zvena');
    await queryInterface.removeConstraint ('Operators', 'operator_zvena_fk');
    await queryInterface.removeConstraint ('Users', 'user_zvena_fk');
  },
};
