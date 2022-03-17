'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('Operators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      zvenoId: {
        type: Sequelize.INTEGER,
      },
      operatorName: {
        type: Sequelize.STRING,
        validate: {
          max: 255,
        },
      },
      operatorCardNumber: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        defaultValue: 0,
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
        table: 'Operators',
        field: 'id',
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('Operators');
    await queryInterface.removeConstraint ('Operators', 'operator_zvena_fk');
  },
};
