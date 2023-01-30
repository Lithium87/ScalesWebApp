'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Measurements', [
      {
        scaleId: 5,
        materialId: 1,
        materialType: 'Плочи',
        operatorName: 'Явор Ягодов Малинов',
        weight: 50.55,
        density: 1.52,
        mixer: 1,
        byrkalo: 1,
        penetration: 1,
      },
      {
        scaleId: 5,
        materialId: 1,
        materialType: 'Плочи',
        operatorName: 'Явор Ягодов Малинов',
        weight: 78.55,
        density: 1.52,
        mixer: 1,
        byrkalo: 1,
        penetration: 1,
      },
      {
        scaleId: 2,
        materialId: 2,
        materialType: 'Решетки',
        operatorName: 'Ясен Яворов Кленов',
        weight: 60.05,
        density: 1.52,
        mixer: 1,
        byrkalo: 1,
        penetration: 1,
      },
      {
        scaleId: 9,
        materialId: 3,
        materialType: 'Оловна паста',
        operatorName: 'Мика Зайкова Дългоушева',
        weight: 180.95,
        density: 10.52,
        mixer: 1,
        byrkalo: 1,
        penetration: 1,
      },
      {
        scaleId: 9,
        materialId: 3,
        materialType: 'Оловна паста',
        operatorName: 'Мика Зайкова Дългоушева',
        weight: 98.95,
        density: 10.52,
        mixer: 1,
        byrkalo: 1,
        penetration: 1,
      },
      {
        scaleId: 9,
        materialId: 3,
        materialType: 'Оловна паста',
        operatorName: 'Мика Зайкова Дългоушева',
        weight: 80.68,
        density: 11.52,
        mixer: 1,
        byrkalo: 1,
        penetration: 1,
      },
      {
        scaleId: 6,
        materialId: 1,
        materialType: 'Плочи',
        operatorName: 'Маруля Петрова Петрова',
        weight: 30.95,
        density: 3.52,
        mixer: 1,
        byrkalo: 1,
        penetration: 1,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Measurements', null, {});
  },
};