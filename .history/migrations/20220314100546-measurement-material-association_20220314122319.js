'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint ('Measurements', {
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
    queryInterface.removeConstraint ('Measurements', 'measure_material_fk');
  },
};
