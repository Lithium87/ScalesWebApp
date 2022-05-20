'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('DopuskiPlo4iRe6etki', [
      {
        typeId: 1,
        plateGridName: 'P1+',
        cardNumber: 111,
        nominalMin1: 5,
        nominalMax1: 5,
        nominalMin2: 10,
        nominalMax2: 10,
      },
      {
        typeId: 1,
        plateGridName: 'P2+',
        cardNumber: 112,
        nominalMin1: 5,
        nominalMax1: 5,
        nominalMin2: 10,
        nominalMax2: 10,
      },
      {
        typeId: 1,
        plateGridName: 'P3+',
        cardNumber: 113,
        nominalMin1: 5,
        nominalMax1: 5,
        nominalMin2: 10,
        nominalMax2: 10,
      },
      {
        typeId: 1,
        plateGridName: 'P4+',
        cardNumber: 114,
        nominalMin1: 5,
        nominalMax1: 5,
        nominalMin2: 10,
        nominalMax2: 10,
      },
      {
        typeId: 2,
        plateGridName: 'E1+',
        cardNumber: 211,
        nominalMin1: 5,
        nominalMax1: 5,
        nominalMin2: 10,
        nominalMax2: 10,
      },
      {
        typeId: 2,
        plateGridName: 'E2+',
        cardNumber: 212,
        nominalMin1: 5,
        nominalMax1: 5,
        nominalMin2: 10,
        nominalMax2: 10,
      },
      {
        typeId: 2,
        plateGridName: 'E3+',
        cardNumber: 213,
        nominalMin1: 5,
        nominalMax1: 5,
        nominalMin2: 10,
        nominalMax2: 10,
      },
      {
        typeId: 2,
        plateGridName: 'E4+',
        cardNumber: 214,
        nominalMin1: 5,
        nominalMax1: 5,
        nominalMin2: 10,
        nominalMax2: 10,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('DopuskiPlo4iRe6etki', null, {});
  },
};
