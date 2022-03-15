'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint ('Users', {
      fields: ['zvenoId'],
      type: 'foreign key',
      name: 'user_zvena_fk',
      references: {
        table: 'Zvena',
        field: 'id',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint ('Users', 'user_zvena_fk');
  },
};
