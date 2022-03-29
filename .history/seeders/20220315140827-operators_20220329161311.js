'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Operators', [
      {
        zvenoId: 1,
        operatorName: 'Явор Ягодов Малинов',
        operatorCardNumber: 111111,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        zvenoId: 1,
        operatorName: 'Ясен Яворов Кленов',
        operatorCardNumber: 111112,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        zvenoId: 1,
        operatorName: 'Маруля Петрова Петрова',
        operatorCardNumber: 111113,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        zvenoId: 2,
        operatorName: 'Карфиол Петров Петров',
        operatorCardNumber: 111114,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        zvenoId: 2,
        operatorName: 'Мика Зайкова Дългоушева',
        operatorCardNumber: 111115,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        zvenoId: 2,
        operatorName: 'Асен Асенов Сербезов',
        operatorCardNumber: 111116,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Operators', null, {});
  },
};
