'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const currentTime = new Date (new Date ().toUTCString ()).toISOString ();
    await queryInterface.bulkInsert ('Operators', [
      {
        zvenoId: 1,
        operatorName: 'Явор Ягодов Малинов',
        operatorCardNumber: 111111,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        zvenoId: 1,
        operatorName: 'Ясен Яворов Кленов',
        operatorCardNumber: 111112,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        zvenoId: 1,
        operatorName: 'Маруля Петрова Петрова',
        operatorCardNumber: 111113,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        zvenoId: 2,
        operatorName: 'Карфиол Петров Петров',
        operatorCardNumber: 111114,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        zvenoId: 2,
        operatorName: 'Мика Зайкова Дългоушева',
        operatorCardNumber: 111115,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        zvenoId: 2,
        operatorName: 'Асен Асенов Сербезов',
        operatorCardNumber: 111116,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Operators', null, {});
  },
};
