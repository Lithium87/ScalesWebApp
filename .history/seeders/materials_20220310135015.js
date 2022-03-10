'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Materials', [
      {
        materialId,
        materialName: 'Плочи',
        cardNo: 111,
      },
      {
        materialId,
        materialName: 'Плочи (с четец на карти)',
        cardNo: 112,
      },
      {
        materialId,
        materialName: 'Решетки',
        cardNo: 113,
      },
      {
        materialId,
        materialName: 'Оловна паста',
        cardNo: 114,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Materials', null, {});
  },
};
