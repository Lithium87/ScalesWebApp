'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Zvena', [
      {
        zvenoName: 'Пастиране',
        zvenoPassword: 'zveno1',
      },
      {
        zvenoName: 'Леярен',
        zvenoPassword: 'zveno2',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Zvena', null, {});
  },
};
