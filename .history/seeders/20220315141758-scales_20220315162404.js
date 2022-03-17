'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ([
      {
        scaleAddress: 1,
        scaleNo: 1,
        scaleName: 'Везна № 1',
      },
      {
        scaleAddress: 2,
        scaleNo: 2,
        scaleName: 'Везна № 2',
      },
      {
        scaleAddress: 3,
        scaleNo: 3,
        scaleName: 'Везна № 3',
      },
      {
        scaleAddress: 4,
        scaleNo: 4,
        scaleName: 'Везна № 4',
      },
      {
        scaleAddress: 5,
        scaleNo: 5,
        scaleName: 'Везна № 5',
      },
      {
        scaleAddress: 6,
        scaleNo: 6,
        scaleName: 'Везна № 6',
      },
      {
        scaleAddress: 7,
        scaleNo: 7,
        scaleName: 'Везна № 7',
      },
      {
        scaleAddress: 8,
        scaleNo: 8,
        scaleName: 'Везна № 8',
      },
      {
        scaleAddress: 9,
        scaleNo: 9,
        scaleName: 'Везна № 9',
      },
      {
        scaleAddress: 10,
        scaleNo: 10,
        scaleName: 'Везна № 10',
      },
      {
        scaleAddress: 11,
        scaleNo: 11,
        scaleName: 'Везна № 11',
      },
      {
        scaleAddress: 12,
        scaleNo: 12,
        scaleName: 'Везна № 12',
      },
      {
        scaleAddress: 13,
        scaleNo: 13,
        scaleName: 'Везна № 13',
      },
      {
        scaleAddress: 14,
        scaleNo: 14,
        scaleName: 'Везна № 14',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Scales', null, {});
  },
};
