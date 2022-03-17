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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint ('Measurements', {
      fields: ['scaleId'],
      type: 'foreign key',
      name: 'measurement_scale_fk',
      references: {
        table: 'Scales',
        field: 'id',
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('Scales');
    await queryInterface.removeConstraint (
      'Measurements',
      'measurement_scale_fk'
    );
  },
};
