'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
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
    await queryInterface.removeConstraint ('Users', 'user_zvena_fk');
  },
};
