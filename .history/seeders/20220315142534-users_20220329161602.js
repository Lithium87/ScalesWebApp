'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Users', [
      {
        role: 'admin',
        username: 'Админ Администраторов',
        zvenoId: 1,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        role: 'technologist',
        username: 'Технолог 1',
        zvenoId: 2,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        role: 'user',
        username: 'Явор Ягодов Малинов',
        operatorName: 'Явор Ягодов Малинов',
        zvenoId: 1,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        role: 'user',
        username: 'Ясен Яворов Кленов',
        operatorName: 'Ясен Яворов Кленов',
        zvenoId: 1,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        role: 'user',
        username: 'Маруля Петрова Петрова',
        operatorName: 'Маруля Петрова Петрова',
        zvenoId: 1,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        role: 'user',
        username: 'Карфиол Петров Петров',
        operatorName: 'Карфиол Петров Петров',
        zvenoId: 2,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        role: 'user',
        username: 'Мика Зайкова Дългоушева',
        operatorName: 'Мика Зайкова Дългоушева',
        zvenoId: 2,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        role: 'user',
        username: 'Асен Асенов Сербезов',
        operatorName: 'Асен Асенов Сербезов',
        zvenoId: 2,
        createdAt: new Date (),
        updatedAt: new Date (),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Users', null, {});
  },
};
