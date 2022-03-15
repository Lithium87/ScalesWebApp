'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
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
    await queryInterface.removeConstraint ('Operators', 'operator_zvena_fk');
  },
};
