'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const currentTime = new Date (new Date ().toUTCString ()).toISOString ();
    await queryInterface.bulkInsert ('Zvena', [
      {
        zvenoName: 'Пастиране',
        zvenoPassword: 'zveno1',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        zvenoName: 'Леярен',
        zvenoPassword: 'zveno2',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Zvena', null, {});
  },
};
