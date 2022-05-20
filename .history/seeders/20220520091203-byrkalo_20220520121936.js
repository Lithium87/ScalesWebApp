'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Byrkala', [
      {
        mixerId: 1,
        byrkaloNumber: 11,
      },
      {
        mixerId: 1,
        byrkaloNumber: 12,
      },
      {
        mixerId: 1,
        byrkaloNumber: 13,
      },
      {
        mixerId: 2,
        byrkaloNumber: 21,
      },
      {
        mixerId: 2,
        byrkaloNumber: 22,
      },
      {
        mixerId: 2,
        byrkaloNumber: 23,
      },
      {
        mixerId: 3,
        byrkaloNumber: 31,
      },
      {
        mixerId: 3,
        byrkaloNumber: 32,
      },
      {
        mixerId: 3,
        byrkaloNumber: 33,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Byrkala', null, {});
  },
};
