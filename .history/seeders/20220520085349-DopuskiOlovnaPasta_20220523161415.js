'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('DopuskiOlovnaPasta', [
      {
        materialTypeId: 3,
        leadPasteName: 'PE100+',
        cardNumber: 311,
        'Nominal density (-)': 10.05,
        'Nominal density (+)': 10.05,
        'Nominal density (--)': 20.10,
        'Nominal density (++)': 20.10,
        minPenetration: 5,
        maxPenetration: 10,
      },
      {
        materialTypeId: 3,
        leadPasteName: 'PE200+',
        cardNumber: 312,
        'Nominal density (-)': 10.05,
        'Nominal density (+)': 10.05,
        'Nominal density (--)': 20.10,
        'Nominal density (++)': 20.10,
        minPenetration: 5,
        maxPenetration: 10,
      },
      {
        materialTypeId: 3,
        leadPasteName: 'PE300+',
        cardNumber: 313,
        'Nominal density (-)': 10.05,
        'Nominal density (+)': 10.05,
        'Nominal density (--)': 20.10,
        'Nominal density (++)': 20.10,
        minPenetration: 5,
        maxPenetration: 10,
      },
      {
        materialTypeId: 3,
        leadPasteName: 'PE400+',
        cardNumber: 314,
        'Nominal density (-)': 10.05,
        'Nominal density (+)': 10.05,
        'Nominal density (--)': 20.10,
        'Nominal density (++)': 20.10,
        minPenetration: 5,
        maxPenetration: 10,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('DopuskiOlovnaPasta', null, {});
  },
};
