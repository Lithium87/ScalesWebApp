'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Zvena', [
      {
        zvenoName: 'Пастиране',
        zvenoPassword: 'zveno1',
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        zvenoName: 'Леярен',
        zvenoPassword: 'zveno2',
        createdAt: new Date (),
        updatedAt: new Date (),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Zvena', null, {});
  },
};
