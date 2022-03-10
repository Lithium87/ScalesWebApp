'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert ('Users', [
      {
        role: 'admin',
        username: 'Админ Администраторов',
      },
      {
        role: 'technologist',
        username: 'Технолог 1',
      },
      {
        role: 'user',
        username: 'Явор Ягодов Малинов',
        operatorName: 'Явор Ягодов Малинов',
        zvenoId: 1,
      },
      {
        role: 'user',
        username: 'Ясен Яворов Кленов',
        operatorName: 'Ясен Яворов Кленов',
        zvenoId: 1,
      },
      {
        role: 'user',
        username: 'Маруля Петрова Петрова',
        operatorName: 'Маруля Петрова Петрова',
        zvenoId: 1,
      },
      {
        role: 'user',
        username: 'Карфиол Петров Петров',
        operatorName: 'Карфиол Петров Петров',
        zvenoId: 2,
      },
      {
        role: 'user',
        username: 'Мика Зайкова Дългоушева',
        operatorName: 'Мика Зайкова Дългоушева',
        zvenoId: 2,
      },
      {
        role: 'user',
        username: 'Асен Асенов Сербезов',
        operatorName: 'Асен Асенов Сербезов',
        zvenoId: 2,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete ('Users', null, {});
  },
};
