'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Materials', [
      {
        materialType: 'Плочи',
        cardNumber: 111,
      },
      {
        materialType: 'Решетки',
        cardNumber: 113,
      },
      {
        materialType: 'Оловна паста',
        cardNumber: 114,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Materials', null, {});
  },
};
