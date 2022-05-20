'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Scales', [
      {
        typeId: 1,
        scaleAddress: 1,
        scaleNumber: 1,
        scaleName: 'Везна № 1',
      },
      {
        typeId: 1,
        scaleAddress: 2,
        scaleNumber: 2,
        scaleName: 'Везна № 2',
      },
      {
        typeId: 1,
        scaleAddress: 3,
        scaleNumber: 3,
        scaleName: 'Везна № 3',
      },
      {
        typeId: 1,
        scaleAddress: 4,
        scaleNumber: 4,
        scaleName: 'Везна № 4',
      },
      {
        typeId: 1,
        scaleAddress: 5,
        scaleNumber: 5,
        scaleName: 'Везна № 5',
      },
      {
        typeId: 2,
        scaleAddress: 6,
        scaleNumber: 6,
        scaleName: 'Везна № 6',
      },
      {
        typeId: 2,
        scaleAddress: 7,
        scaleNumber: 7,
        scaleName: 'Везна № 7',
      },
      {
        typeId: 2,
        scaleAddress: 8,
        scaleNumber: 8,
        scaleName: 'Везна № 8',
      },
      {
        typeId: 3,
        scaleAddress: 9,
        scaleNumber: 9,
        scaleName: 'Везна № 9',
      },
      {
        typeId: 3,
        scaleAddress: 10,
        scaleNumber: 10,
        scaleName: 'Везна № 10',
      },
      {
        typeId: 3,
        scaleAddress: 11,
        scaleNumber: 11,
        scaleName: 'Везна № 11',
      },
      {
        typeId: 3,
        scaleAddress: 12,
        scaleNumber: 12,
        scaleName: 'Везна № 12',
      },
      {
        typeId: 3,
        scaleAddress: 13,
        scaleNumber: 13,
        scaleName: 'Везна № 13',
      },
      {
        typeId: 3,
        scaleAddress: 14,
        scaleNumber: 14,
        scaleName: 'Везна № 14',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Scales', null, {});
  },
};
