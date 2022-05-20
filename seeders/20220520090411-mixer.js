'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Mixers', [
      {
        mixerNumber: 1,
      },
      {
        mixerNumber: 2,
      },
      {
        mixerNumber: 3,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete ('Mixer', null, {});
  },
};
