'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Materials', [
      {
        materialType: 'Плочи',
      },
      {
        materialType: 'Решетки',
      },
      {
        materialType: 'Оловна паста',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Materials', null, {});
  },
};
