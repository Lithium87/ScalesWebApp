'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Materials', [
      {
        materialName: 'Плочи',
        cardNumber: 111,
      },
      {
        materialName: 'Плочи (с четец на карти)',
        cardNumber: 112,
      },
      {
        materialName: 'Решетки',
        cardNumber: 113,
      },
      {
        materialName: 'Оловна паста',
        cardNumber: 114,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Materials', null, {});
  },
};
