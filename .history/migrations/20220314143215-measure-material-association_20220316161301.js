'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint ('Measurements', {
      fields: ['materialId'],
      type: 'foreign key',
      name: 'measurement_material_fk',
      references: {
        table: 'Materials',
        field: 'id',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint (
      'Measurements',
      'measurement_material_fk'
    );
  },
};
