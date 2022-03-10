'use strict';

module.exports = {
  async up: (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Materials', [{
      "materialName": "Плочи",
      "cardNo": 111
  },
  {
      "materialName": "Плочи (с четец на карти)",
      "cardNo": 112
  },
  {
      "materialName": "Решетки",
      "cardNo": 113
  },
  {
      "materialName": "Оловна паста",
      "cardNo": 114
  }
]);
  },

  async down: (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Materials', null, {});
  }
};
