'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Materials', [
      {
        materialName: 'Плочи',
        cardNumber: 111,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        materialName: 'Плочи (с четец на карти)',
        cardNumber: 112,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        materialName: 'Решетки',
        cardNumber: 113,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        materialName: 'Оловна паста',
        cardNumber: 114,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Materials', null, {});
  },
};
