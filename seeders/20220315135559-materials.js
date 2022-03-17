'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const currentTime = new Date (new Date ().toUTCString ()).toISOString ();
    await queryInterface.bulkInsert ('Materials', [
      {
        materialName: 'Плочи',
        cardNumber: 111,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        materialName: 'Плочи (с четец на карти)',
        cardNumber: 112,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        materialName: 'Решетки',
        cardNumber: 113,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        materialName: 'Оловна паста',
        cardNumber: 114,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Materials', null, {});
  },
};
