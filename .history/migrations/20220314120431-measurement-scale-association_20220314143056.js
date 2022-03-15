'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint ('Measurements', {
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
    queryInterface.removeConstraint ('Measurements', 'measurement_scale_fk');
  },
};
