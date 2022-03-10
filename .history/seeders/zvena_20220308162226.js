'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert ('Zvena', [
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
    return await queryInterface.bulkDelete ('Zvena', null, {});
  },
};
