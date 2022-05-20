'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkCreate ('DopuskiOlovnaPasta', [
      {
        typeId: 3,
        leadPasteName: 'PE100+',
        cardNumber: 311,
        nominalMin1: 10.05,
        nominalMax1: 10.05,
        nominalMin2: 20.10,
        nominalMax2: 20.10,
        minPenetration: 5,
        maxPenetration: 10,
      },
      {
        typeId: 3,
        leadPasteName: 'PE200+',
        cardNumber: 312,
        nominalMin1: 10.05,
        nominalMax1: 10.05,
        nominalMin2: 20.10,
        nominalMax2: 20.10,
        minPenetration: 5,
        maxPenetration: 10,
      },
      {
        typeId: 3,
        leadPasteName: 'PE300+',
        cardNumber: 313,
        nominalMin1: 10.05,
        nominalMax1: 10.05,
        nominalMin2: 20.10,
        nominalMax2: 20.10,
        minPenetration: 5,
        maxPenetration: 10,
      },
      {
        typeId: 3,
        leadPasteName: 'PE400+',
        cardNumber: 314,
        nominalMin1: 10.05,
        nominalMax1: 10.05,
        nominalMin2: 20.10,
        nominalMax2: 20.10,
        minPenetration: 5,
        maxPenetration: 10,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('DopuskiOlovnaPasta', null, {});
  },
};
