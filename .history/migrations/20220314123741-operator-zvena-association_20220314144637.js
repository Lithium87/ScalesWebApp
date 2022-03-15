'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint ('Operators', {
      fields: ['zvenoId'],
      type: 'foreign key',
      name: 'operator_zvena_fk',
      references: {
        table: 'Zvena',
        field: 'id',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint ('Operators', 'operator_zvena_fk');
  },
};
