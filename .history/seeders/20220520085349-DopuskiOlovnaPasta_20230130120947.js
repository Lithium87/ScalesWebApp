'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('DopuskiOlovnaPasta', [
      {
        materialId: 3,
        leadPasteName: 'PE100+',
        cardNumber: 311,
        nominalDensityMin1: 10.05,
        nominalDensityMax1: 10.05,
        nominalDensityMin2: 20.10,
        nominalDensityMax2: 20.10,
        minPenetration: 5,
        maxPenetration: 10,
      },
      {
        materialId: 3,
        leadPasteName: 'PE200+',
        cardNumber: 312,
        nominalDensityMin1: 10.05,
        nominalDensityMax1: 10.05,
        nominalDensityMin2: 20.10,
        nominalDensityMax2: 20.10,
        minPenetration: 5,
        maxPenetration: 10,
      },
      {
        materialId: 3,
        leadPasteName: 'PE300+',
        cardNumber: 313,
        nominalDensityMin1: 10.05,
        nominalDensityMax1: 10.05,
        nominalDensityMin2: 20.10,
        nominalDensityMax2: 20.10,
        minPenetration: 5,
        maxPenetration: 10,
      },
      {
        materialId: 3,
        leadPasteName: 'PE400+',
        cardNumber: 314,
        nominalDensityMin1: 10.05,
        nominalDensityMax1: 10.05,
        nominalDensityMin2: 20.10,
        nominalDensityMax2: 20.10,
        minPenetration: 5,
        maxPenetration: 10,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('DopuskiOlovnaPasta', null, {});
  },
};
