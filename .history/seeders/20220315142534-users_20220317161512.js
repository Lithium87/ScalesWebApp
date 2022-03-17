'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const currentTime = new Date (new Date ().toUTCString ()).toISOString ();
    await queryInterface.bulkInsert ('Users', [
      {
        role: 'admin',
        username: 'Админ Администраторов',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        role: 'technologist',
        username: 'Технолог 1',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        username: 'Явор Ягодов Малинов',
        operatorName: 'Явор Ягодов Малинов',
        zvenoId: 1,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        username: 'Ясен Яворов Кленов',
        operatorName: 'Ясен Яворов Кленов',
        zvenoId: 1,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        username: 'Маруля Петрова Петрова',
        operatorName: 'Маруля Петрова Петрова',
        zvenoId: 1,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        username: 'Карфиол Петров Петров',
        operatorName: 'Карфиол Петров Петров',
        zvenoId: 2,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        username: 'Мика Зайкова Дългоушева',
        operatorName: 'Мика Зайкова Дългоушева',
        zvenoId: 2,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        username: 'Асен Асенов Сербезов',
        operatorName: 'Асен Асенов Сербезов',
        zvenoId: 2,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Users', null, {});
  },
};
