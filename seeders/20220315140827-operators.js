'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Operators', [
      {
        zvenoId: 1,
        zvenoName: 'Пастиране',
        operatorName: 'Явор Ягодов Малинов',
        operatorCardNumber: 111111,
      },
      {
        zvenoId: 1,
        zvenoName: 'Пастиране',
        operatorName: 'Ясен Яворов Кленов',
        operatorCardNumber: 111112,
      },
      {
        zvenoId: 1,
        zvenoName: 'Пастиране',
        operatorName: 'Маруля Петрова Петрова',
        operatorCardNumber: 111113,
      },
      {
        zvenoId: 2,
        zvenoName: 'Леярен',
        operatorName: 'Карфиол Петров Петров',
        operatorCardNumber: 111114,
      },
      {
        zvenoId: 2,
        zvenoName: 'Леярен',
        operatorName: 'Мика Зайкова Дългоушева',
        operatorCardNumber: 111115,
      },
      {
        zvenoId: 2,
        zvenoName: 'Леярен',
        operatorName: 'Асен Асенов Сербезов',
        operatorCardNumber: 111116,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Operators', null, {});
  },
};
