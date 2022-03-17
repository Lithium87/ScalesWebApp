'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Materials', [
      {
        materialName: 'Плочи',
        cardNo: 111,
      },
      {
        materialName: 'Плочи (с четец на карти)',
        cardNo: 112,
      },
      {
        materialName: 'Решетки',
        cardNo: 113,
      },
      {
        materialName: 'Оловна паста',
        cardNo: 114,
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
