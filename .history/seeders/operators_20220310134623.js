'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Operators', [
      {
        zvenoId: 1,
        operatorName: 'Явор Ягодов Малинов',
        operatorCartNo: 111111,
      },
      {
        zvenoId: 1,
        operatorName: 'Ясен Яворов Кленов',
        operatorCartNo: 111112,
      },
      {
        zvenoId: 1,
        operatorName: 'Маруля Петрова Петрова',
        operatorCartNo: 111113,
      },
      {
        zvenoId: 2,
        operatorName: 'Карфиол Петров Петров',
        operatorCartNo: 111114,
      },
      {
        zvenoId: 2,
        operatorName: 'Мика Зайкова Дългоушева',
        operatorCartNo: 111115,
      },
      {
        zvenoId: 2,
        operatorName: 'Асен Асенов Сербезов',
        operatorCartNo: 111116,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Operators', null, {});
  },
};
