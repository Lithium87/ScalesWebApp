'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
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
    await removeConstraint ('Measurements', 'measurement_scale_fk');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
