'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('DopuskiPlo4iRe6etki', [
      {
        typeId: 1,
        plateGridName: 'P1+',
        cardNumber: 111,
        'Nominal (-)': 5,
        'Nominal (+)': 5,
        'Nominal (--)': 10,
        'Nominal (++)': 10,
      },
      {
        typeId: 1,
        plateGridName: 'P2+',
        cardNumber: 112,
        'Nominal (-)': 5,
        'Nominal (+)': 5,
        'Nominal (--)': 10,
        'Nominal (++)': 10,
      },
      {
        typeId: 1,
        plateGridName: 'P3+',
        cardNumber: 113,
        'Nominal (-)': 5,
        'Nominal (+)': 5,
        'Nominal (--)': 10,
        'Nominal (++)': 10,
      },
      {
        typeId: 1,
        plateGridName: 'P4+',
        cardNumber: 114,
        'Nominal (-)': 5,
        'Nominal (+)': 5,
        'Nominal (--)': 10,
        'Nominal (++)': 10,
      },
      {
        typeId: 2,
        plateGridName: 'E1+',
        cardNumber: 211,
        'Nominal (-)': 5,
        'Nominal (+)': 5,
        'Nominal (--)': 10,
        'Nominal (++)': 10,
      },
      {
        typeId: 2,
        plateGridName: 'E2+',
        cardNumber: 212,
        'Nominal (-)': 5,
        'Nominal (+)': 5,
        'Nominal (--)': 10,
        'Nominal (++)': 10,
      },
      {
        typeId: 2,
        plateGridName: 'E3+',
        cardNumber: 213,
        'Nominal (-)': 5,
        'Nominal (+)': 5,
        'Nominal (--)': 10,
        'Nominal (++)': 10,
      },
      {
        typeId: 2,
        plateGridName: 'E4+',
        cardNumber: 214,
        'Nominal (-)': 5,
        'Nominal (+)': 5,
        'Nominal (--)': 10,
        'Nominal (++)': 10,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('DopuskiPlo4iRe6etki', null, {});
  },
};
